import { useEffect, useState } from 'react';
import Socket from './services/socket.service';
import {Chat} from './components/Chat/chat.component';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    Socket.emit("newUser");
  }, []);

  useEffect(() => {
    Socket.on("messageEmmited", (messageEmmited) => {
      setAllMessages([...allMessages, messageEmmited]);
    });
    return () => Socket.off();
  }, [allMessages]);

  const sendMessage = () => {
    Socket.emit("newMessage", message);
    setMessage("");
  };

  return (
    <div className="App"> Hello world! {message.message}
    <div>
      {allMessages.map((message, key) => (
        <div key={key}>{message.message}</div>
      ))}
    </div>
    <Chat message={message} setMessage={setMessage} sendMessage={sendMessage}/>
    </div>
  );
}

export default App;
