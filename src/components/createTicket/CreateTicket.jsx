import React from "react"
import "./CreateTicket.css"

const CreateTicket = () => {
  return (
    <div className="create-ticket-container">
      <h2>Create Quick Ticket</h2>
      <p>Write and address new queries and issues</p>
      <form className="ticket-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Type Email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ticketType">Request Ticket Type</label>
            <select id="ticketType" className="form-control">
              <option value="">Choose Type</option>
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
              <option value="general">General Query</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="priority">Priority Status</label>
            <select id="priority" className="form-control">
              <option value="">Select Status</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="issue">Write Issue</label>
          <textarea
            id="issue"
            rows="5"
            placeholder="Type issue here."
            className="form-control"
          ></textarea>
        </div>
        <button type="submit" className="btn-submit">
          Send Ticket
        </button>
      </form>
    </div>
  )
}

export default CreateTicket
