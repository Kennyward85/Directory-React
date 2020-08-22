import React from "react";


const SearchTable = (props) => {
  
  // form created from React-bootstrap
  
  return (
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
