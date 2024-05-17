import Reputation from "@/components/Reputation"
import Table from "../components/Table"
import TestTable from "../components/TestTable"

import { useState, useEffect } from "react"

const defaultState = {
  users: [
    { id: 1, name: 'jeremy', reputation: 10 },
    { id: 2, name: 'emergent', reputation: 10 }
  ],
  links: [ { from: 1, to: 2, share: 0.3 }]
}

export default function CHIPs() {
  const [currentState, setCurrentState] = useState(defaultState)

  useEffect(() => {
    console.log('loaded')
    setInterval(() => {
      console.log('tick')
      calculateReputation(currentState)
    }, 5000)
  }, [])

  const calculateReputation = (state) => {
    const { users, links } = currentState
    users.map(u => {
      console.log({ u })
      const oldReputation = u.reputation
      const incomingLinks = links.filter((l) => l.to === u.id)
      const incomingReps = incomingLinks.map(l => {
        const incomingUser = users.find(u => u.id === l.from)
        const repAmount = Math.floor(incomingUser.reputation * l.share)
        console.log("new rep!", { incomingUser, repAmount })
      })

      const newReputation = [10, ...incomingReps].reduce((acc, cur) => acc + cur, 0)

      console.log({ newReputation })
    })
    // setCurrentState(newState)
  }

  return <div><div>CHIPs</div>
  <Table />
  <hr />
  <TestTable />
  <Reputation />
  {JSON.stringify(currentState)}
  </div>
}