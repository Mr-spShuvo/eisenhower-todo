import React from 'react';
import Content from './components/Content';
import Header from './components/Header';

import './styles/app.scss';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
};
