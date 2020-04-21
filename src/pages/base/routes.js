import React from 'react';
import { Switch, Route } from 'react-router-dom';

import StashAway from 'pages/StashAway';

const Routes = () => (
  <Switch>
    <Route path="/" component={StashAway} />
  </Switch>
);

export default Routes;
