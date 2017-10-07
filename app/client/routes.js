import React from "react";
import { Route, IndexRoute } from "react-router";

import { App } from "./components/App.js";
import { Main } from "./components/Main.js";
import { Impact } from "./components/Impact.js";
import { NotFound } from "./components/NotFound.js";
import { Circle } from "./components/Circle";
import { Question } from "./components/Question.js";
import { Cloud } from "./components/Cloud.js";
import { RiskGraph } from "./components/RiskGraph";
import {Body} from "./components/Body";

export const routes = (
  <Route path="/" component={App}>
    <IndexRoute title="App" component={Main} />
    <Route path="impact" title="Impact" component={Impact} />
    <Route path="body" title="Body" component={Body} />
    <Route path="circle" title="Circle" component={Circle} />
    <Route path="questions" title="Questions" component={Question} />
    <Route path='riskgraph' title='Risk Graph' component={RiskGraph} />
    <Route path="cloud" title="Cloud Upload" component={Cloud} />
    <Route path="*" title="404: Not Found" component={NotFound} />
  </Route>
);

export default routes;
