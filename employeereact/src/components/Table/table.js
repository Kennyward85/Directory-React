import React from 'react';
import Table from 'react-bootstrap/table';



    const EmpTable = (props) => {
    const { users } = props;
    
    return (

        <Table striped bordered hover variant='dark'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Street</th>
                    <th>State</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {users.map( state => new User(state) (  
               <tr>
                   <td>{firstName}</td>
                   <td>{lastName}</td>
                   <td>{email}</td>
                   <td>{city}</td>
                   <td>{street}</td>
                   <td>{state}</td>
                   <td>{phone}</td>
               </tr>))}
            </tbody>
        </Table>
    )
}

export default EmpTable;