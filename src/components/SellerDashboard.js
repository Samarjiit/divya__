import React from "react"
import logo from "../images/logo.png"
const SellerDashboard = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F5F8FF text-gray-800 flex mt-0 ml-4">
      {/* Sidebar */}
      <aside className="w-[25%]">
        <img src={logo} alt="logo" className="mb-0 ml-[10%]" />
        <nav className="mt-6">
          <ul>
            <li className="p-4 bg-[#6666FF] text-white rounded-lg font-medium w-[90%]">
              Overview
            </li>
            <li className="p-4">Products</li>
            <li className="p-4">Customer</li>
            <li className="p-4">Orders</li>
            <li className="p-4">Shipment</li>
            <li className="p-4">Store Setting</li>
            <li className="p-4">Payments</li>
            <li className="p-4">Feedback</li>
            <li className="p-4">Help & Support</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">Welcome, Zency</h2>
            <p className="text-gray-500">Here’s Your Current Sales Overview</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-gray-500">Damodhar</div>
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          </div>
        </header>

        {children}
      </main>
    </div>
  )
}

export default SellerDashboard
