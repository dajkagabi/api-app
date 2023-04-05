import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
