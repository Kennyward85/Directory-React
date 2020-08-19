import React from 'react';
import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmpTable from "./components/table/table";

class App extends React.Component {
  constructor(props) {
  super(props)
  this.state ={
  search: '',
  users:[]
}
}

componentDidMount() {
  axios.get(`https://randomuser.me/api/?results=20&nat=us`)
      .then(res => {  
        let users = (res && res.data) ? res.data.results: [];
        const tableList = users.map(state => new User(state));
        this.setState({ allUsers: tableList, users: tableList });

    })
}
}



 App() {
  useEffect(() => {

  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}
export default App;
