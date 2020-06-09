import React, { useState, useEffect } from 'react';
import "./App.css";
import ReactDom from "react-dom";
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

function App() {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
      console.log('test')
      fetch('/time', {headers: {
    'Accept': 'application/json'
  }}).then(res => res.json()).then(data => {
        setCurrentTime(data.time);
      });
    }, []);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pasos</h1>
          <p>The current time is {currentTime}.</p>
        </header>
        <p className="App-intro">
          A virtual pilgrimmage on the Camino de Santiago
        </p>
        <h2> Login with Google </h2>
        <GoogleLogin
        clientId="131807459563-1re3hrvm5dsv90jo04arhkth4lfra1pg.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }

export default App;
