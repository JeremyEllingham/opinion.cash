import Reputation from "@/components/Reputation"
import Table from "../components/Table"
import TestTable from "../components/TestTable"

import { useEffect } from "react"

export default function CHIPs() {
  useEffect(() => {
    console.log('loaded')
    setInterval(() => {
      console.log('tick')
    }, 5000)
  }, [])

  return <div><div>CHIPs</div>
  <Table />
  <hr />
  <TestTable />
  <Reputation />
  </div>
}