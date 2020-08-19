import React, {useState } from "react";
import Form from 'react-bootstrap/form';
import Col from 'react-bootstrap/Col';
import API from "../../API/API";

searchFilter = () => {
// Setting the States and changing them to filter the table down as swe type in the search box
const [user, setUser] = useState([])
const [filtUser, SetFiltUser] = useState([])

// API call to get the data from the users
API.getEmployees()
.then(res => {
  setUser(res.data.results)
  SetFiltUser(res.data.results)
})

  // Calling from react library to handle the change in state of the search
    filterOnChange = (event) => {
        filterUser(event, user)
}
// Filtering results of the user by joining what is typed into the search field
// into a single string and converting it to lower case then returning anything
// from the object results event to lower case if it has a value of anything besides
// -1 which arrays start at 0 so returning all 
filterUser = (event, searchRes) => {
  const searching = searchRes.filter(user => {
    let results = Object.results(user).join("")
    .toLowerCase();
    return results.indexOf(event.toLowerCase()) !== -1;
  });
  SetFiltUser(searching)

  }


render() {
// form created from React-bootstrap
    return (
    <Form>
  <Form.Row>
    <Col xs={5}>
      <Form.Control type = 'text' placeholder="Search Table" value={this.state.search} onChange={(event) => this.filterOnChange(event.target.value)} />
      </Col>
  </Form.Row>
  <TableSet user={filtUser}/>
</Form>
)
}
}

export default Search;