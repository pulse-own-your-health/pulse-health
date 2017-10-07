import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App, About, Home, NotFound } from './components/App.js';
import { Question } from './components/Question.js';

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute title='App' component={Home} />
    <Route path='about' title='App - About' component={About} />
    <Route path='questions' title='Questions' component={Question} />
    <Route path='*' title='404: Not Found' component={NotFound} />
  </Route>
);

export default routes;
