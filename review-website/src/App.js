import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Header from './components/site/header';
import Sidebar from './components/site/sidebar-left';
import { BrowserRouter as Router } from 'react-router-dom';
import Vinylrecord from './components/site/vinylrecord';


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
      <Router>
      <Header />
      </Router>
      <Vinylrecord />
      <Router>
        <Sidebar clickLogout={clearToken} token={sessionToken} />
      </Router>
    </div>
  );
}

export default App;
