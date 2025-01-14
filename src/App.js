import React from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CreateTicket from "./components/createTicket/CreateTicket"
import TicketDetails from "./components/ticketDetails/TicketDetail"
import NotificationList from "./components/notification/NotificationList"
import Tickets from "./components/tickets/TIcket"
import SellerDashboard from "./components/SellerDashboard"
const App = () => {
  return (
    <Router>
      <SellerDashboard>
        <Routes>
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/ticket-details" element={<TicketDetails />} />
          <Route path="/notification" element={<NotificationList />} />
          <Route path="/create-ticket" element={<CreateTicket />} />
        </Routes>
      </SellerDashboard>
    </Router>
  )
}

export default App
