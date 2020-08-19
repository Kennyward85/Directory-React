import React from 'react';
import Search from "./components/Search/search";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "./components/container/container";
import TableSet from "./components/Table/table";


class App extends React.Component {
  state = {
    users:[],
    search:'',
  }

 users;



// Loading Data from remote endpoint 
componentDidMount() {
  fetch(`https://randomuser.me/api/?results=20&nat=us`)
      .then(res => res.json())
      .then(data => this.setState({ users : data.results}));
        
  }

  searchResults = (dynamicSearch) => {
    this.setState({ search : dynamicSearch });
  }
 
    

  sortArray = (objects, order, direction) => {
    let signal = direction === "asc" ? 1 : -1
    objects.sort((a,b) => (a[order] > b[order]) ? signal * 1 : ((b[order] > a[order]) ? signal * -1 : 0));
    }
  
   
 render() {
 
  return (
    <div className="App">
      <Container>
        <Search searchResults={this.searchResults}/>
        <TableSet/>
      </Container>
    </div>
  );
}
}
export default App;
