import React from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from './components/Sidebar';
import Maincontent from './components/Maincontent';
//import Abc from './components/about';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Maincontent />
    <Sidebar />
  </React.StrictMode>
);

