import './index.css'
import Message from '../Message'

const Logout = props => {
  const {onclick, message} = props
  return (
    <div>
      <Message message={message} />
      <div className="logout-btn-container">
        <button onClick={onclick} type="button">
          Logout
        </button>
      </div>
    </div>
  )
}

export default Logout
