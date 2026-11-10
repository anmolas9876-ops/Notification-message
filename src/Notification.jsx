import React from 'react';
import './Notification.css';

const notificationStyles = {
  info: {
    className: 'notification--info',
    label: 'Info',
    icon: 'i',
  },
  warning: {
    className: 'notification--warning',
    label: 'Warning',
    icon: '!',
  },
};

/** Displays a message with a visual style based on its type. */
export default function Notification({ message, type = 'info' }) {
  const variant = notificationStyles[type];

  if (!variant || !message) return null;

  return (
    <div className={`notification ${variant.className}`} role={type === 'warning' ? 'alert' : 'status'}>
      <span className="notification__icon" aria-hidden="true">{variant.icon}</span>
      <div>
        <strong className="notification__label">{variant.label}</strong>
        <p className="notification__message">{message}</p>
      </div>
    </div>
  );
}
