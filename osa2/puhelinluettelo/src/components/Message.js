import './Message.css'

const Message = ({ message }) => {
  if (message !== null && message.length !== 0) {
    if (message.includes('Added') || message.includes('Updated') || message.includes('Removed')) {
      return <div className="green">{message}</div> 
    } else {
      return <div className="red">{message}</div>
    }
  } else {
    return <div></div>
  }
} 

export default Message