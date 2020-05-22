import React from 'react';

import Router from './Router';
import ThemeProvider from './ThemeProvider';

const App = () => (
  <ThemeProvider>
    <Router />
  </ThemeProvider>
);

export default App;
