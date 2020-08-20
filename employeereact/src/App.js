import React from 'react';
import axios from 'axios';
import SearchTable from "./components/Search/search";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/container';
import TableSet from "./components/Table/TableSet";


class App extends React.Component {
  state = {
    users:[],
   search:'',
   direction: 'asc',
  
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

  
  searchFilter = (value) => {
    this.setState({ search : value });
    this.search.filter(this.users.toLowerCase().includes(this.value))
        };

     
    

  sortArray = (direction, order, users) => {
      console.log("sorting");
      const signal = direction === "asc" ? 1 : -1;
      if(direction === 'asc') { 
        users.sort((a,b) => (a[order] > b[order]) ? signal * 1 : ((b[order] > a[order]) ? signal * -1 : 0));
        console.log("sorted");
      }
        }
  
 render () {
 
  return (
    <div className="App">
      
      <Container>
        <SearchTable search={this.searchFilter}  />
        <TableSet users={this.state.users} sort={this.sortArray}/>
      </Container>
    </div>
  );
  }
}

export default App;
