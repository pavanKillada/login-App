// Write your code here
import {Component} from 'react'
import './index.css'
import Message from '../Message'

class Logout extends Component {
  state = {message: 'Welcome User', btnText: 'Logout'}

  onLogout = () => {
    this.setState(state => {
      if (state.message === 'Welcome User') {
        return {message: 'Please Login', btnText: 'Logout'}
      }
      return {message: 'Welcome User', btnText: 'Login'}
    })
  }

  render() {
    const {message, btnText} = this.state
    return (
      <div>
        <Message message={message} />
        <div className="logout-btn-container">
          <button onClick={this.onLogout} type="button">
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default Logout
