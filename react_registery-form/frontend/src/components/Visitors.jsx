import React from 'react';
import useFetch from '../hooks/useFetch';
import axios from 'axios';

const Visitors = () => {
  const [loading, data, error] = useFetch('visitors');
//   console.log('kas cia', data);

function deleteVisitor(id) {
    axios.delete(`http://localhost:5000/api/visitors/${id}`)
    .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
        // const data = data.filter(item => item.id !== id);  
        // this.setState({ data });  
      })  
    
  }  

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    <div>
      <h2>Information about the visitors</h2>
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
              {/* <td style={{ padding: '15px 0px 15px 50px' }}>
                <button>Edit</button>
              </td> */}
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
