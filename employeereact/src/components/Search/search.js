import React from "react";
import Form from 'react-bootstrap/form';
import Col from 'react-bootstrap/col';
// import TableSet from './components/Table/TableSet';

const SearchTable = (props) => {
  
  // form created from React-bootstrap
  
      return (
      <Form>
    <Form.Row>
      <Col xs={5}>
        <Form.Control  type="text" placeholder="Search Table"   onChange={props.search}/>
        </Col>
    </Form.Row>
  </Form>
  );
              
}
  
  export default SearchTable;
