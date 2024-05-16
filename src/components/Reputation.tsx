import React from 'react'

const Reputation = () => {
  return (
    <div>
      <h2>Reputation</h2>
      <p>Your reputation starts at 10. It cannot fall below this baseline.</p>
      <p>Your reputation increases (or decreases) based on reputation shared to you by other community members.</p>
      
      <table>
        <thead>
          <tr>
            <th>Sentiment</th>
            <th>Reputation share</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Essential
            </td>
            <td>
              30%
            </td>
          </tr>
          <tr>
            <td>
              Extremely Credible
            </td>
            <td>
              20%
            </td>
          </tr>
          <tr>
            <td>
              Very Credible
            </td>
            <td>
              10%
            </td>
          </tr>
          <tr>
            <td>
              Credible
            </td>
            <td>
              5%
            </td>
          </tr>
          <tr>
            <td>
              Neutral (default)
            </td>
            <td>
              0%
            </td>
          </tr>
          <tr>
            <td>
              Skeptical
            </td>
            <td>
              -5%
            </td>
          </tr>
          <tr>
            <td>
              Disruptive
            </td>
            <td>
              -15%
            </td>
          </tr>
        </tbody>
      </table>
      
      <p>For example, Alice is a new user on OP_inion.cash. Her reputation is 10. Bob is a longstanding user, with a network of connections & reputation of 200.</p>

      <p>Every 1 minute, reputation is recalculated - using a snapshot of the reputation stats from the previous 10 minutes as the baseline numbers.</p>

      <p>Bob changes his Sentiment for Alice from "Neutral" (default 0% reputation share) to "Very Credible" (10% reputation share). This adds 20 points to Alice's reputation, 10% of Bob's 200 reputation. Therefore, Alice's reputation rises to 31.</p>
      
      <p>Alice responds by marking Bob as "Essential" (33% reputation share). This makes Bob's reputation rise 10 points (31 x 30% = 9.3, rounded down) to 210. This in turn reflects back to Alice through the existing "Very Credible" 10% share from Alice to Bob, boosting her from 31 to 32.</p>

      <p>It is advantageous to build mututal reputation shares, just like any other social network.</p>

      <p>Bob's rising reputation will increase Alice's reputation & vice-versa. The same is also true for Bob's falling reputation.</p>
    </div>
  )
}

// Lock 1 BCH = Receive a "10 reputation" starting token, attached to an NFT.

export default Reputation