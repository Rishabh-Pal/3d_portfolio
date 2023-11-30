import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [email, setEmail] = useState({
    to: '',
    subject: '',
    text: '',
  });

  const sendEmail = () => {
    axios.post('http://localhost:3001/send-email', email)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div>
      <input
        type="email"
        placeholder="To"
        value={email.to}
        onChange={(e) => setEmail({ ...email, to: e.target.value })}
      />
      <input
        type="text"
        placeholder="Subject"
        value={email.subject}
        onChange={(e) => setEmail({ ...email, subject: e.target.value })}
      />
      <textarea
        placeholder="Message"
        value={email.text}
        onChange={(e) => setEmail({ ...email, text: e.target.value })}
      />
      <button onClick={sendEmail}>Send Email</button>
    </div>
  );
};

export default App;
