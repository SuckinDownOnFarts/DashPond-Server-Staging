import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthProvider';
import { registerLicense } from '@syncfusion/ej2-base';
import './index.css';

//SyncFusion license key
registerLicense('ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0dhWX9acndRRWZcUEE=');

if (process.env.NODE_ENV === 'production') disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthProvider>  
  <Router>
    <Routes>
        <Route path="/*" element={<App />} />
    </Routes>
  </Router>
</AuthProvider>
);

