// Write your code here
import {Component} from 'react'
import './index.css'
import Logout from '../Logout'
import Login from '../Login'

class Home extends Component {
  state = {
    loggedIn: false,
  }

  onCreateElement = () => {
    let {loggedIn} = this.state
    if (loggedIn === false) {
      loggedIn = true
    } else {
      loggedIn = false
    }
    return loggedIn
  }

  render() {
    const loggedIn = this.onCreateElement()
    return (
      <div className="bg-container">
        <div className="card-container">
          {!loggedIn ? <Logout /> : <Login />}
        </div>
      </div>
    )
  }
}

export default Home
