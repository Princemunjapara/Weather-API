import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Component/Home';
import Weathers from './Component/Weathers';
// import Loader from './Component/Loader';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/Weathers'element={<Weathers></Weathers>}></Route>
          </Routes>
          {/* <Loader></Loader> */}
        </Router>
      </div>
    )
  }
}
