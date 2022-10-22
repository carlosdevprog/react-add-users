import React from 'react';
import ReactDOM from 'react-dom/client';
import Globalstyle from './styles/globalstyle';
import Routes from './routes'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />, <Globalstyle/>
  </React.StrictMode>
);



