export const Chat = ({message, setMessage, sendMessage}) => {
  return(
    <>
    <input
      type="text"
      value={message}
      onChange={(event)=>{setMessage(event.target.value)}}/>
    <button onClick={sendMessage}> Send </button>
    </>
  )
};