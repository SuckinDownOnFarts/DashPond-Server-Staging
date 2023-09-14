import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthProvider';
import { MantineProvider } from '@mantine/core';
import './index.css';


if (process.env.NODE_ENV === 'production') disableReactDevTools();

let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <AuthProvider>
            <MantineProvider
                theme={{
                    colorScheme: dark ? 'dark' : 'light',
                    primaryColor: dark ? 'orange' : 'pink'
                }}
                withGlobalStyles
                withNormalizeCSS
            >
                <Router>
                    <Routes>
                        <Route path="/*" element={<App />} />
                    </Routes>
                </Router>
            </MantineProvider>
    </AuthProvider>
);

