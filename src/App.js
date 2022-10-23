import './App.css';
import React, { Component } from 'react'
import SnackMachine from "./components/SnackMachine"
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
<div className='App'>
        <Router>
    <Routes>
      <Route
        path="/"
        element={<SnackMachine />}
      />
    </Routes>
    </Router>
    </div>
    )
  }
}


