import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppSkeleton from 'organisms/AppSkeleton';

import Routes from './routes';

function App() {
  return (
    <Router>
      <AppSkeleton
        bodyContainer={Routes}
      />
    </Router>
  );
}

export default App;
