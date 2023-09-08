import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import NavComp from './sections/nav';
import SignComp from './sections/signup';
import LoginComp from './sections/login';
import MessComp from './sections/message';
import Email from './sections/email';

const Default = () => {

  const Route = ({ path, children }) => {
    const [link, setLink] = useState(window.location.pathname)
    useEffect(() => {
      const onLink = () => {
        setLink(window.location.pathname)
      }
      window.addEventListener('popstate', onLink)
      return () => {
        window.removeEventListener('popstate', onLink)
      }
    }, [])

    return link === path ? children : null;
  }

  return (
    <>
      <main id="body">
        <NavComp/>
        <Route path="/">
          <LoginComp/>
        </Route>
        <Route path="/signup">
          <SignComp/>
        </Route>
        <Route path="/email">
          <Email/>
        </Route>
        <Route path="/message">
          <MessComp/>
        </Route>
      </main>
    </>
  );
};

ReactDOM.render(<Default/>, document.getElementById("root"))

