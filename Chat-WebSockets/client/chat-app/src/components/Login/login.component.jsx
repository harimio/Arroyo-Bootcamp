import React from 'react';
import './login.css';

export const Login = ({ loginState, setLoginState, userName, setUserName }) => {

  const cambiarEstado = () => {
    if (userName === "") {
      return
    }
    if (!loginState) {
      setLoginState(true)
    }
  };

  return (
    <div className='centrar'>
      <input className='Login-TextField' type="text" placeholder='Set your user name...'
        value={userName} onChange={(e) => setUserName(e.target.value)} />
      <button className='button' onClick={cambiarEstado}>Login</button>
    </div>
  )
}