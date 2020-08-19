import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/table';

   
   const TableSet =()=> {
    
    
  
    
            return (
        // Sorting Array in ascending or Descending order on click for all headers but phone number
        // Using sortArray 
        <Table striped bordered hover variant='dark'>
            <thead>
                <tr>
                    <th className= 'Sort' onClick={() => this.sortArray(this.firstName)}>First Name</th>
                    <th className= 'Sort' onClick={() => this.sortArray(this.LastName)}>Last Name</th>
                    <th className= 'Sort' onClick={() => this.sortArray(this.email)}>Email</th>
                    <th className= 'Sort' onClick={() => this.sortArray(this.city)}>City</th>
                    <th className= 'Sort' onClick={() => this.sortArray(this.street)}>Street</th>
                    <th className= 'Sort' onClick={() => this.sortArray(this.state)}>State</th>
                    <th >Phone</th>
                </tr>
            </thead>
            <tbody>
            {user.map(user => (  
               <tr>
                   <td>{user.name.first}</td>
                   <td>{user.name.last}</td>
                   <td>{user.email}</td>
                   <td>{user.location.city}</td>
                   <td>{user.email.login}</td>
                   <td>{user.location.state}</td>
                   <td>{user.phone}</td>
               </tr>))}
            </tbody>
        </Table>
    )
}

export default TableSet;