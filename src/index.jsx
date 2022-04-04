import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';

import './i18next';
import Navigation from './Navigation';

ReactDOM.render(
    <React.StrictMode >
        {/* <Router> */}
        <Suspense fallback={<div>Loading...</div>}>
            {/* <App /> */}
            <Navigation />
        </Suspense>
        {/* </Router> */}
    </React.StrictMode>,
    document.getElementById('root')
);