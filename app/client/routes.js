import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from './components/App.js';
import { Main } from './components/Main.js';
import { NotFound } from './components/NotFound.js';
import { Circle } from "./components/Circle";

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute title='App' component={Main} />
    <Route path='circle' title='Circle' component={Circle} />
    <Route path='*' title='404: Not Found' component={NotFound} />
  </Route>
);

export default routes;
