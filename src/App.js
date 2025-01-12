import React from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CreateTicket from "./components/createTicket/CreateTicket"
import TicketDetails from "./components/ticketDetails/TicketDetail"
import TopBar from "./components/TopBar"
import SideBar from "./components/SideBar"
const App = () => {
  return (
    <Router>
      <div className="dashboard">
        <SideBar />
        <div className="main-content">
          <TopBar />
          <Routes>
            <Route path="/" element={<CreateTicket />} />
            <Route path="/ticket-details" element={<TicketDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
