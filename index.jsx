import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App';
import Info from './src/components/Info';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

const Roster = () => (
  <BrowserRouter>
    <div>
      <NavLink to="/Info">Посмотреть анализ</NavLink>
      <br />
      <NavLink to="/">Главная</NavLink>
      <Switch>
        <Route exact path="/" component={App} exact />
        <Route path="/info" component={Info} exact />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<Roster />, document.getElementById('root'));
