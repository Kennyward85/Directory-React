import React from 'react';
import Table from 'react-bootstrap/table';


  
const TableSet = (props) => {
   
      return (
         
        // Sorting Array in ascending or Descending order on click for all headers but phone number
        // Using sortArray 
        <Table striped bordered hover variant='dark'>
            <thead>
                <tr>
                    <th className= 'Sort' onClick={props.sort}>First Name</th>
                    <th className= 'Sort' onClick= {props.sort}>Last Name</th>
                    <th className= 'Sort' onClick={props.sort}>Email</th>
                    <th className= 'Sort' onClick={props.sort}>Username</th>
                    <th className= 'Sort' onClick={props.sort}>city</th>
                    <th className= 'Sort' onClick={props.sort}>State</th>
                    <th >Phone</th>
                </tr>
            </thead>
            <tbody>
            {props.users.map(user => {
                
            return    <tr key={props.users.id}> 
                   <td>{user.name.first}</td>
                   <td>{user.name.last}</td>
                   <td>{user.email}</td>
                   <td>{user.login.username}</td>
                   <td>{user.location.city}</td>
                   <td>{user.location.state}</td>
                   <td>{user.phone}</td>
               </tr>})}
            </tbody>
        </Table>
    )
}

export default TableSet;