import React from 'react';
// import axios from 'axios';

const Table = ({ user}) => {
    // const api = axios.create({
    //     baseURL: `http://localhost:5000/api/visitors`
    // })
    
    // const updateVisitor = (e) => {

    // }

    // const deleteVisitor = (e) => {
    //     const visitorId = e.target.dataset.visitorId
    //     axios.delete(`http://localhost:5000/api/visitors$`)
    //     .then(response => {
    //         if(response.data != null) {
    //             console.log("isrinta");
    //         }
    //     })
    // }

    // const deleteVisitor = async (id) => {
    //     let data = await api.delete(`/${id}`)
    //     deleteVisitor()
        
    // } 
    
  return (
    <table>
        <tbody>
      <tr style={{backgroundColor:'grey', padding: '20px'}}>
        <th style={{ padding: '15px 50px'}}>Name</th>
        <th style={{ padding: '15px 50px'}}>Surname</th>
        <th style={{ padding: '15px 50px'}}>Email</th>
        <th style={{ padding: '15px 50px'}}>Birth date</th>
        <th style={{ padding: '15px 50px'}}>Edit</th>
        <th style={{ padding: '15px 50px'}}>Delete</th>
      </tr>
      <tr>
        <td style={{ padding: '15px 0px 15px 15px', textAlign:'left'}}>{user.username}</td>
        <td style={{ padding: '15px 0px 15px 15px', textAlign:'left'}}>{user.surname}</td>
        <td style={{ padding: '15px 0px 15px 15px', textAlign:'left'}}>{user.email}</td>
        <td style={{ padding: '15px 0px 15px 15px', textAlign:'left'}}>{user.age}</td>
        {/* <td style={{ padding: '15px 0px 15px 50px'}}><button onClick={updateVisitor}>Edit</button></td> */}
        {/* <td style={{ padding: '15px 0px 15px 50px'}}><button onClick={deleteVisitor}>Delete</button></td> */}
      </tr>
      </tbody>
    </table>
  );
};

export default Table;
