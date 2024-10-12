import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';

import {ScrollToTop} from "./components";

import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <ScrollToTop/>
        <App />
    </Router>
  </StrictMode>,
)
