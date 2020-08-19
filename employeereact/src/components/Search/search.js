import React, { useState } from "react";
import Form from 'react-bootstrap/form';
import Col from 'react-bootstrap/col';
import TableSet from './components/Table/table';
import API from "../../API/API";

// would not let me use arrow function

  
  // form created from React-bootstrap
      return (
      <Form>
    <Form.Row>
      <Col xs={5}>
        <Form.Control type = 'text' placeholder="Search Table"  onChange={event => filterOnChange(event.target.value)} />
        </Col>
    </Form.Row>
    <TableSet user={filtUser}/>
  </Form>
  );
  
  export default searchFilter;
