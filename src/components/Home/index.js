// Write your code here
import {Component} from 'react'
import './index.css'
import Logout from '../Logout'
import Login from '../Login'

class Home extends Component {
  state = {
    element: <Login onclick={this.onLogin} message="Please Login" />,
    loggedIn: false,
  }

  onLogin = () => {
    this.setState(() => ({
      element: this.onCreateElement.element,
      loggedIn: this.onCreateElement.loggedIn,
    }))
  }

  onLogout = () => {
    this.setState(() => ({
      element: this.onCreateElement.element,
      loggedIn: this.onCreateElement.loggedIn,
    }))
  }

  onCreateElement = () => {
    let {loggedIn, element} = this.state
    if (loggedIn === false) {
      loggedIn = true
      element = <Logout onclick={this.onLogout} message="Please Login" />
    } else {
      loggedIn = false
      element = <Login onclick={this.onLogin} message="Welcome User" />
    }
    return {element, loggedIn}
  }

  render() {
    const {element} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">{element}</div>
      </div>
    )
  }
}

export default Home
