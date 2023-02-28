// Write your code here
import './index.css'
import Message from '../Message'

const Login = props => {
  const {onclick, message} = props
  return (
    <div>
      <Message message={message} />
      <div className="login-btn-container">
        <button onClick={onclick} type="button">
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
