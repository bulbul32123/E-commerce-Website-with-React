import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import { ContextApi } from './context/ContextApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-78bklxhlk2qp81d3.us.auth0.com"
    clientId="1O2aOdUFrztiGC1bwEuRCO1vYlVQSBmk"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ContextApi>
      <App />
    </ContextApi>,
  </Auth0Provider>
)
