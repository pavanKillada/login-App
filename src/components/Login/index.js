// Write your code here
import {Component} from 'react'
import './index.css'
import Message from '../Message'

class Login extends Component {
  state = {message: 'Please Login', btnText: 'Login'}

  onLogin = () => {
    this.setState(state => {
      if (state.message === 'Please Login') {
        return {message: 'Welcome User', btnText: 'Logout'}
      }
      return {message: 'Please Login', btnText: 'Login'}
    })
  }

  render() {
    const {message, btnText} = this.state
    return (
      <div>
        <Message message={message} />
        <div className="login-btn-container">
          <button onClick={this.onLogin} type="button">
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default Login
