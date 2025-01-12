import React from "react"
import "./TicketDetails.css"

const TicketDetails = () => {
  return (
    <div className="ticket-container">
      <h2>Tickets</h2>
      <div className="ticket-card">
        <div className="ticket-header">
          <div className=" ticket-id">🟡 Ticket# 2023-CS123</div>
          <div className="ticket-timestamp">Posted at 12:45 AM</div>
        </div>
        <h3>How to deposit money to my portal?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="reply-form">
        <h3>Reply to Ticket</h3>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Customer Email</label>
              <input
                type="email"
                id="email"
                placeholder="Type Email..."
                className="form-control"
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="ticketType">Request Ticket Type</label>
              <select id="ticketType" className="form-control">
                <option value="deposit">Deposit Issue</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select id="status" className="form-control">
                <option value="ongoing">🟡 On-Going</option>
                <option value="resolved">🟢 Resolved</option>
              </select>
            </div>
          </div>
          <div className="form-group ticket-body">
            <label htmlFor="ticketBody">Ticket Body</label>
            <textarea
              id="ticketBody"
              rows="5"
              placeholder="Type ticket issue here..."
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group button-container">
            <button type="submit" className="btn-submit">
              Submit Reply
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TicketDetails
