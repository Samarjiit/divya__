import React from 'react'
import logo from '../images/logo.png'

const SellerDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F5F8FF text-gray-800 flex mt-0 ml-4">
      {/* Sidebar */}
      <aside className="w-[25%]">
        <img src={logo} alt="logo" className='mb-0 ml-[10%]'/>
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

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="p-4 bg-purple-100 text-purple-600 rounded-lg">
            <h3 className="text-lg">Total Sales</h3>
            <p className="text-2xl font-bold">77.21</p>
            <span className="text-sm">+3.1% From last month</span>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-lg">Order Fulfilled</h3>
            <p className="text-2xl font-bold">2,107</p>
            <span className="text-sm text-red-500">-1.8% From last month</span>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-lg">Order Returned</h3>
            <p className="text-2xl font-bold">653</p>
            <span className="text-sm text-green-500">
              +2.2% From last month
            </span>
          </div>
        </div>

        {/* Sales Overtime */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Sales Overtime</h3>
            <div className="h-40 bg-gray-100 rounded"></div>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Top Selling Product</h3>
            <ul>
              <li className="flex justify-between items-center mb-2">
                <span>Red Tape Sports Shoes</span>
                <span className="text-green-500">Available</span>
              </li>
              <li className="flex justify-between items-center mb-2">
                <span>Fasttrack FSI Pro Smartwatch</span>
                <span className="text-green-500">Available</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Levi’s Fashion Men’s Shirt</span>
                <span className="text-green-500">Available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Latest Orders */}
        <div className="mt-6 bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-lg font-bold mb-4">Latest Orders</h3>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2">Order ID</th>
                <th className="py-2">Product</th>
                <th className="py-2">Order Date</th>
                <th className="py-2">Price</th>
                <th className="py-2">Payment</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#2456L</td>
                <td>Nike Sportswear</td>
                <td>Jan 12, 12:23 pm</td>
                <td>$134.00</td>
                <td>Transfer</td>
                <td className="text-yellow-500">Processing</td>
              </tr>
              <tr>
                <td>#5435DF</td>
                <td>Acqua di Parma</td>
                <td>May 01, 01:13 pm</td>
                <td>$23.00</td>
                <td>Credit Card</td>
                <td className="text-green-500">Completed</td>
              </tr>
              <tr>
                <td>#9876XC</td>
                <td>Allen Solly</td>
                <td>Sep 20, 09:08 am</td>
                <td>$441.00</td>
                <td>Transfer</td>
                <td className="text-green-500">Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export default SellerDashboard
