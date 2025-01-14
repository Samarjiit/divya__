import React, { useState } from "react"
import "./Ticket.css"

const ticketsData = [
  {
    id: "2023-CS123",
    title: "How to deposit money to my portal?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    priority: "NewTickets",
    time: "12:45 AM",
    status: "New",
    user: "John Snow",
  },
  {
    id: "2023-CS124",
    title: "How to deposit money to my portal?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    priority: "OnGoingTickets",
    time: "12:45 AM",
    status: "On-Going",
    user: "John Snow",
  },
  {
    id: "2023-CS125",
    title: "How to deposit money to my portal?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    priority: "ResolvedTickets",
    time: "12:45 AM",
    status: "Resolved",
    user: "John Snow",
  },
  {
    id: "2023-CS125",
    title: "How to deposit money to my portal?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    priority: "ResolvedTickets",
    time: "12:45 AM",
    status: "Resolved",
    user: "John Snow",
  },
  {
    id: "2023-CS125",
    title: "How to deposit money to my portal?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    priority: "ResolvedTickets",
    time: "12:45 AM",
    status: "Resolved",
    user: "John Snow",
  },
  {
    id: "2023-CS125",
    title: "How to deposit money to my portal?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    priority: "ResolvedTickets",
    time: "12:45 AM",
    status: "Resolved",
    user: "John Snow",
  },
]

const Tickets = () => {
  const [currentTab, setCurrentTab] = useState("All Tickets")
  const [currentPage, setCurrentPage] = useState(1)
  const ticketsPerPage = 3

  const filteredTickets = ticketsData.filter(
    (ticket) => currentTab === "All Tickets" || ticket.status === currentTab
  )

  const totalPages = Math.ceil(filteredTickets.length / ticketsPerPage)

  const currentTickets = filteredTickets.slice(
    (currentPage - 1) * ticketsPerPage,
    currentPage * ticketsPerPage
  )

  const handleTabChange = (tab) => {
    setCurrentTab(tab)
    setCurrentPage(1)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="container">
      <h2 className="tickets-heading">Tickets</h2>

      <div className="tickets-container">
        <div className="header">
          <div className="controls">
            <input
              type="text"
              placeholder="Search for ticket"
              className="search-bar"
            />
            <div className="spaces"></div>
            <select className="priority-dropdown">
              <option>Select Priority</option>
              <option>🔵 New Tickets</option>
              <option>🟡 On-Going Tickets</option>
              <option>🟢 Resolved Tickets</option>
            </select>
            <select className="time-dropdown">
              <option>This Week</option>
              <option>Last Week</option>
              <option>This Month</option>
            </select>
            <button className="new-ticket-button">New Ticket</button>
          </div>
        </div>

        <div className="tabs">
          {["All Tickets", "New", "On-Going", "Resolved"].map((tab) => (
            <button
              key={tab}
              className={currentTab === tab ? "active" : ""}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="tickets-list">
          {currentTickets.map((ticket) => (
            <div className="ticket-card" key={ticket.id}>
              <div className={`priority-dot ${ticket.priority}`}></div>
              <span className="ticket-time">posted at {ticket.time}</span>
              <div className="ticket-info">
                <h3 className="ticket-id">{`Ticket# ${ticket.id}`}</h3>
                <h4>{ticket.title}</h4>
                <p>{ticket.description}</p>
                <hr className="ticket-divider" />
                <div className="ticket-footer">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s"
                    alt="profile-icon"
                    className="profile-icon"
                  />
                  <span className="profile-name">{ticket.user}</span>
                </div>
              </div>
              <a href="#" className="open-ticket-link">
                Open Ticket
              </a>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              className={currentPage === page + 1 ? "active" : ""}
              onClick={() => handlePageChange(page + 1)}
            >
              {page + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tickets
