import React from 'react';
import axios from 'axios';
import SearchTable from "./components/Search/search";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/container';
import TableSet from "./components/Table/TableSet";


class App extends React.Component {
  state = {
    users:[],
    searchTerm: '',
  }

 
// Loading Data from remote endpoint 
componentDidMount = () => {
  axios.get(`https://randomuser.me/api/?results=20&nat=us`)
      .then(data => {
        console.log(data.data.results);
        this.setState({ users : data.data.results})
      })
      .catch(err => console.log(err));   
  } 
  
  onInputChange = (event) => {
    event.preventDefault();
    let newInput = event.target.value;
    this.setState({searchTerm : newInput})
  }
  
  onSearchSubmit = (event) => {
    event.preventDefault();
    let userInput = this.state.searchTerm.toLowerCase();
    console.log(this.state.searchTerm);
   
    let searchResults = [];
    for(let i = 0; i < this.state.users.length; i++) {
      if(this.state.users[i].name.first.toLowerCase() === userInput ||  this.state.users[i].name.last.toLowerCase() === userInput) {
        searchResults.push(this.state.users[i])
      }
    }
    this.setState({users: searchResults})
  }
       
  sortArray = (event) => {
    console.log(event.target.className);
    let field = event.target.className
    let ascend;
    if (field === 'last' || field === 'first') {
      ascend = this.state.users.sort((a,b) => (a.name[field] > b.name[field]) ?  1 : ((b.name[field] > a.name[field]) ?  -1 : 0));
    } else if (field === 'city' || field === 'state') {
      ascend = this.state.users.sort((a,b) => (a.location[field] > b.location[field]) ?  1 : ((b.location[field] > a.location[field]) ?  -1 : 0));
    } else if(field === 'username') {
      ascend = this.state.users.sort((a,b) => (a.login[field] > b.login[field]) ?  1 : ((b.login[field] > a.login[field]) ?  -1 : 0));
    } else {
     ascend = this.state.users.sort((a,b) => (a[field] > b[field]) ?  1 : ((b[field] > a[field]) ?  -1 : 0));
    }
    this.setState({users: ascend})
  }   
  
 render () {
 
  return (
    <div className="App">
      <br/><br/><br/><br/>
      <Container>
        <SearchTable submit={this.onSearchSubmit} change={this.onInputChange} searchTerm={this.state.searchTerm}/>
        <TableSet users={this.state.users} sort={this.sortArray}/>
      </Container> 
    </div>
  );
  }
}

export default App;
