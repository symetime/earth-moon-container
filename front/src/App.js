import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [message, setMessage] = useState('');
  const [moonMessage, setMoonMessage]= useState('');
  useEffect(() => {
    fetch('http://localhost:5000/api/message')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
    
    fetch('http://localhost:5001/api/moon')
      .then((response) => response.json())
      .then((data) => setMoonMessage(data.message));
      


  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <h1>{message}</h1>
      <button onClick={()=> {
        setMessage(moonMessage);
      }}>Get more</button>
    </div>
  );
}

export default App;
