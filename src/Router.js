import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { map } from 'lodash';

import route from './route';

const Router = () => (
  <BrowserRouter>
    <Switch>
      {map(route, (routeProps, key) => (
        <Route key={key} {...routeProps} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Router;
