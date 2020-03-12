import React from 'react';
import './App.css';
import Welcome from './components/Welcome'
import Login from './components/Login'
import API from './API'

class App extends React.Component {

  state = {
    username: null
  }

  componentDidMount() {
    return API.fetchUser()
    .then(data => {
      if(data.status === 'error') throw Error(data.message)
      this.setState({
        ...this.state,
        username: data.user.username
      })
    }).catch(error => alert(error))
  }

  login = () => window.open('http://localhost:3001/api/v1/users/auth/linkedin', "_self")

  render() {
    return (
      <div className="app">
        <Welcome />
        <Login login={this.login} />
      </div>
    );
  }
}

export default App;
