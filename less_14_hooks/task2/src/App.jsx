import React from 'react';
import { BrowserRouter as Router, Route, Swich, Link } from 'react-router-dom';
import User from './User';

const App = () => {
  return (
    <div className="page">
      <div className="page__content">
        <h1>Users</h1>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/users/github">Github</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users/facebook">Facebook</Link>
          </li>
        </ul>
        <Switch>
          <Route path="users/:usersId">
            <User />
          </Route>
          <Route path="">
            <span>Select a user please</span>
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default App;
