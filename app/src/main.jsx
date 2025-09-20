import React from 'react'
import ReactDOM from 'react-dom/client'
import * as d3 from 'd3'
import App from './App.jsx'

window.d3 = d3

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)