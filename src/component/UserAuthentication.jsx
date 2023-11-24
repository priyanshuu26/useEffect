import React, { useState } from 'react';

function UserAuthentication() {
  const [data, setData] = useState({ username: '', password: '' });
  const [record, setRecord] = useState([]);
  const [log, setLog] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.username === 'priyanshu' && data.password === '123') {
      setLog(!log);
    } else if (data.username !== 'priyanshu') {
      alert('No username found');
    } else if (data.password !== '123') {
      alert('check your password again');
    }
    setRecord([...record, data]);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <button type="submit">{!log ? 'login' : 'logout'}</button>
      </form>
    </div>
  );
}

export default UserAuthentication;
