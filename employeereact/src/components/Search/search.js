import React from "react";


const SearchTable = (props) => {
  
  // form created from React-bootstrap
  
  return (
    // <Form>
    //   <Form.Row>
    //     <Col xs={5}>
    //       <Form.Control className="search" type="text"  placeholder="Search Table" value={props.searchTerm} onChange={props.onInputChange}/>
    //       <Button style={{width: '160px', height: '40px'}} className="Button" variant="secondary" onSubmit={props.onSearchSubmit}>Submit</Button>
    //     </Col>
    //   </Form.Row>
    // </Form>
    <div>
      <p>Search by Either First or Last Name:</p>
      <form onSubmit={props.submit}>
        <input  type="text"  placeholder="Search Table" value={props.searchTerm} onChange={props.change}/>
        <input type ="submit" value="Submit"/>
      </form>
    </div>
  );
              
}
  
  export default SearchTable;
