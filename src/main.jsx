import React from 'react';
import { createRoot } from 'react-dom/client';
import Notification from './Notification.jsx';
import './styles.css';

function App() {
  return (
    <main className="page">
      <section className="demo">
        <p className="eyebrow">Reusable React component</p>
        <h1>Notification messages</h1>
        <p className="intro">Choose a notification type to give a message a clear visual style.</p>
        <div className="notification-list">
          <Notification type="info" message="Your profile was updated successfully." />
          <Notification type="warning" message="Your session will expire in 5 minutes." />
        </div>
        <p className="hint">Use <code>type="info"</code> for blue or <code>type="warning"</code> for orange.</p>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
