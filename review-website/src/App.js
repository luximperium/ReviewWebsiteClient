import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Header from './components/site/header';
import Sidebar from './components/site/sidebar-left';
import { BrowserRouter as Router } from 'react-router-dom';
import Vinylrecord from './components/site/vinylrecord';
import Musique from "./components/site/musiquebaselogo";


function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])


  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  return (
    <div className="App">
      <Musique />    
      <Header /> 
      <Vinylrecord />
      <Router>
        <Sidebar clickLogout={clearToken} token={sessionToken} />
      </Router>
    </div>
  );
}

export default App;
