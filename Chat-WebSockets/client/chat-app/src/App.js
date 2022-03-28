import Socket from './services/socket.services.js';
import { useEffect, useState } from 'react';
import './App.css';
import { Chat } from './components/Chat/chat.component.jsx'
import { Login } from './components/Login/login.component.jsx';
import { Messagess } from './components/messages/messagess.component.jsx';

function App() {

  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [loginState, setLoginState] = useState(false);
  const [clase, setClase] = useState("container")
  const [stateButtonSend, setStateButonSend] = useState(false);
  useEffect(() => {
    loginState && Socket.emit("newUser", userName);
  }, [loginState])

  useEffect(() => {
    Socket.on("messageEmmited", (messageEmmited) => {
      setAllMessages([...allMessages, messageEmmited]);
    });
    return () => Socket.off();
  }, [allMessages])

  useEffect(() => {
    if (stateButtonSend) {
      setClase("container darker");
    }
    else {
      setClase("container");
    }
  }, [stateButtonSend])

  const sendMessage = () => {
    Socket.emit("newMessage", message);
    setMessage("");
    setStateButonSend(!stateButtonSend);
  };

  return (
    <div>
      <div className='App-header'>
        <image src="/descubrecomohacerlo.com/wp-content/uploads/2020/12/fondo-predeterminado-whatsapp.jpg" />
        {!loginState ? <Login loginState={loginState} setLoginState={setLoginState}
          userName={userName} setUserName={setUserName} /> :
          <div className='App-chatbox'>
            <div className='App-conversation'>
              <Messagess allMessages={allMessages} clase={clase} />
            </div>
            <Chat message={message} setMessage={setMessage} sendMessage={sendMessage} />
          </div>
        }
      </div>
    </div>
  );
}

export default App;
