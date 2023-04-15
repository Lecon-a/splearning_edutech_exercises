import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import './index.css'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
            <App />
        </Router>
    </Provider>
)
