import React from 'react';
import './App.css';
import Welcome from './components/Welcome'
import Auth from './components/Auth'
import API from './API'

class App extends React.Component {

  state = {
    username: null
  }

  componentDidMount() {
    return API.fetchUser()
    .then(data => {
      if(data.status === 'success')
      this.setState({
        ...this.state,
        username: data.user.username
      })
    }).catch(error => alert(error))
  }

  login = () => window.open('http://localhost:3001/api/v1/users/auth/linkedin', "_self")

  logout = () => {
    API.logoutUser()
    return this.setState({
      ...this.state,
      username: null
    })
  }

  render() {
    return (
      <div className="app">
        <Welcome />
        <Auth 
        logout={this.logout}
        login={this.login} />
      </div>
    );
  }
}

export default App;
