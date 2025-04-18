import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Replace with your backend URL
    fetch('http://localhost:5000/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  return (
    <div>
      <h1>User List from MongoDB</h1>
      {users.map((user, index) => (
        <div key={index}>
          <p>👤 Name: {user.name}</p>
          <p>📧 Email: {user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
