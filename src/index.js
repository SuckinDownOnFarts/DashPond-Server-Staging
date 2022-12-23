import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthProvider';
import { ContextProvider } from './Context/ContextProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { registerLicense } from '@syncfusion/ej2-base';
import './index.css';

//SyncFusion license key
registerLicense('ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0dhWX9acndRRWZcUEE=')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
  <AuthProvider>
    <ContextProvider>
      <Routes>
          <Route path="/*" element={<App />} />
      </Routes>
    </ContextProvider>
  </AuthProvider>
</Router>
);

