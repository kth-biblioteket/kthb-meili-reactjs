import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
//import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

import './index.css';

ReactDOM.render(
  /*
  <Auth0Provider
    domain="https://login.ref.ug.kth.se/adfs/oauth2"
    clientId="c977e3cc-a6bf-4843-bb7f-6fd0c57cfe60"
    redirectUri={'https://apps-ref.lib.kth.se/mrbs'}
    //redirectUri={window.location.origin}
  >
  */
    <BrowserRouter>
      <App />
    </BrowserRouter>
  /*
  </Auth0Provider>
  */
  ,
  document.getElementById('root')
);
