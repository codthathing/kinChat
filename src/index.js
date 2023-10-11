import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Home from './sections/home';
import { OptNavProvider } from './sections/navigateContext';

const Default = () => {
  return (
    <OptNavProvider>
      <Home/>
    </OptNavProvider>
  );
};

ReactDOM.render(<Default/>, document.getElementById("root"))

