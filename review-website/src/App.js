import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Header from './components/site/header';
import Sidebar from './components/site/sidebar-left';
import { BrowserRouter as Router } from 'react-router-dom';
import Vinylrecord from './components/site/vinylrecord';

function App() {
  return (
    <div className="App">
      <Header />
      <Vinylrecord />
      <Router>
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
