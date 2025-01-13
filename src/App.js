import React from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CreateTicket from "./components/createTicket/CreateTicket"
import TicketDetails from "./components/ticketDetails/TicketDetail"
import TopBar from "./components/TopBar"
import SideBar from "./components/SideBar"
import NotificationList from "./components/notification/NotificationList"
import Tickets from "./components/tickets/TIcket"
const App = () => {
  return (
    <Router>
      <div className="dashboard">
        <SideBar />
        <div className="main-content">
          <TopBar />
          <Routes>
            <Route path="/" element={<Tickets />} />
            <Route path="/ticket-details" element={<TicketDetails />} />
            <Route path="/notification" element={<NotificationList />} />
            <Route path="/create-ticket" element={<CreateTicket />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
