import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import NavComp from './sections/nav';
import SignComp from './sections/signup';
import LoginComp from './sections/login';
import MessComp from './sections/message';

const Default = () => {

  return (
    <>
      <main id="body">
        <NavComp/>
        <SignComp/>
        <LoginComp/>
        <MessComp/>
      </main>
    </>
  );
};

ReactDOM.render(<Default/>, document.getElementById("root"))

