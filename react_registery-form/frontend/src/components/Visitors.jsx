import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import axios from 'axios';

const Visitors = () => {
  const [loading, data, error] = useFetch('visitors');
  const [username, setUsername] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [visitors, setVisitor] = useState([]);
  const [selectedVisitorId, setSelectedVisitorId] = useState('');

  useEffect(() => {
    getVisitors();
  }, []);

  function getVisitors() {
    axios.get('http://localhost:5000/api/visitors').then((res) => {
      setVisitor(res.data);
      //   setUsername(res.data[0].username);
      //   setSurname(res.data[0].surname);
      //   setEmail(res.data[0].email);
      //   setAge(res.data[0].age);
    });
  }

  function selectVisitor(id) {
    let user = visitors.find((user) => user._id === id);
    // console.log(user);
    setUsername(user.username);
    setSurname(user.surname);
    setEmail(user.email);
    setAge(user.age);
    setSelectedVisitorId(id);
  }

  function deleteVisitor(id) {
    axios.delete(`http://localhost:5000/api/visitors/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);
      const a = data.filter((b) => {
        return b.id !== id;
      });
      setVisitor(a);
    });
  }

  function updateVisitor() {
    axios
      .put(`http://localhost:5000/api/visitors/${selectedVisitorId}`, {
        username: username,
        surname: surname,
        email: email,
        age: age,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
  }

  const submitHandler = (e) => {
    e.preventDefault();
  };

  //---------------

  //----------

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    <div>
      <h2>Information about the visitors</h2>
      <h3>Update visitor information</h3>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type='text'
          value={surname}
          onChange={(e) => {
            setSurname(e.target.value);
          }}
        />
        <input
          type='text'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type='text'
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <button onClick={updateVisitor}>Update visitor</button>
      </form>

      <table>
        <tbody>
          <tr style={{ backgroundColor: 'grey', padding: '20px' }}>
            <th style={{ padding: '15px 50px' }}>Name</th>
            <th style={{ padding: '15px 50px' }}>Surname</th>
            <th style={{ padding: '15px 50px' }}>Email</th>
            <th style={{ padding: '15px 50px' }}>Birth date</th>
            <th style={{ padding: '15px 50px' }}>Edit</th>
            <th style={{ padding: '15px 50px' }}>Delete</th>
          </tr>
          {data.map((item, i) => (
            <tr key={i}>
              <td style={{ padding: '15px 0px 15px 15px', textAlign: 'left' }}>
                {item.username}
              </td>
              <td style={{ padding: '15px 0px 15px 15px', textAlign: 'left' }}>
                {item.surname}
              </td>
              <td style={{ padding: '15px 0px 15px 15px', textAlign: 'left' }}>
                {item.email}
              </td>
              <td style={{ padding: '15px 0px 15px 15px', textAlign: 'left' }}>
                {item.age}
              </td>
              <td style={{ padding: '15px 0px 15px 50px' }}>
                <button onClick={() => selectVisitor(item._id)}>Edit</button>
              </td>
              <td style={{ padding: '15px 0px 15px 50px' }}>
                <button onClick={() => deleteVisitor(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Visitors;
