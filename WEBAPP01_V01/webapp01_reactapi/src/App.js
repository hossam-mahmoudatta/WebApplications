import logo from './logo.svg';
import './App.css';

import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';

import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center">
          React JS Tutorial
        </h3>

        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/department">
                Department
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/employee">
                Employee
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' component={Home} exact/>
          <Route path='/department' component={Department}/>
          <Route path='/employee' component={Employee}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;