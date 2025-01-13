import React from "react"
import "./NotificationList.css"

const notifications = [
  {
    id: 1,
    message: "Hey, just wanted to follow up on our meeting yesterday",
    time: "5 Days ago",
  },
  {
    id: 2,
    message: "Hey, just wanted to follow up on our meeting yesterday",
    time: "5 Days ago",
  },
  {
    id: 3,
    message: "Hey, just wanted to follow up on our meeting yesterday",
    time: "5 Days ago",
  },
  {
    id: 4,
    message: "Hey, just wanted to follow up on our meeting yesterday",
    time: "5 Days ago",
  },
  {
    id: 5,
    message: "Hey, just wanted to follow up on our meeting yesterday",
    time: "5 Days ago",
  },
]

const NotificationList = () => {
  return (
    <div className="notification-container">
      <h2>Notification</h2>
      <div className="notification-list">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-item">
            <div className="notification-icon"></div>
            <div className="notification-content">
              <h3>New message from Jane</h3>
              <p>{notification.message}</p>
            </div>
            <div className="notification-time">{notification.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotificationList
