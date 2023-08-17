import React, { useEffect, useState } from 'react';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
/////////////////////////////////////////////**************LAYOUT*************///////////////////////////////////////////////////////////
import Layout from './components/LayoutGlobals/Layout';
/////////////////////////////////////////////**************SCREENS*************///////////////////////////////////////////////////////////
import DPLayout from './Screens/DataProfile/Layout/DPLayout';
import Missing from './Screens/404/Missing';
import Contact from './Screens/Contact/Contact';
import Features from './Screens/Feautures/Features';
/////////////////////////////////////////////**************PRODUCT SCREENS*************///////////////////////////////////////////////////////////
import ProductLayout from './Screens/Products/ProductsLayout/ProductLayout';
/////////////////////////////////////////////**************CREATE DATA PROFILE SCREENS*************///////////////////////////////////////////////////////////
import AddressInput from './Screens/Products/Create_DataProfiles/AddressInput';
import DashLayout from './Screens/Products/Create_DataProfiles/Layout/DashLayout';
import FileUploader from './Screens/Products/Create_DataProfiles/FileUploader';
import MapModal from './Screens/Products/Create_DataProfiles/MapModal';
/////////////////////////////////////////////**************PRICING SCREENS*************///////////////////////////////////////////////////////////
import PricingPlan from './Screens/Pricing/PricingPlan';
import Pricing from './Screens/Pricing/Pricing';
import Checkout from './Screens/Pricing/Checkout';
/////////////////////////////////////////////**************DATA PROFILE SCREENS*************///////////////////////////////////////////////////////////
import Overview from './Screens/DataProfile/Layout/Overview';
/////////////////////////////////////////////**************AUTH SCREENS*************///////////////////////////////////////////////////////////
import Register from './Screens/AuthScreens/Register';
import Login from './Screens/AuthScreens/Login';
import RequireAuth from './components/Auth/RequireAuth';
import PersistLogin from './components/Auth/PersistLogin';
import PricingRequireAuth from './components/Auth/PricingRequireAuth';
import AlreadyLoggedIn from './Screens/AuthScreens/AlreadyLoggedIn';
/////////////////////////////////////////////**************USER PROFILE SCREENS*************///////////////////////////////////////////////////////////
import RequireProfileAuth from './components/Auth/RequireProfileAuth';
import ProfileLayout from './Screens/Profile/Layout/ProfileLayout';
import Info from './Screens/Profile/Info/InfoLayout';
import DataProfiles from './Screens/Profile/User_DataProfiles/DataProfilesLayout';
/////////////////////////////////////////////**************DOCUMENTATION SCREENS*************///////////////////////////////////////////////////////////
import DocsLayout from './Screens/Docs/Documentation_Layout/Documentation_Layout';
import DocumentationHome from './Screens/Docs/Documentation_Screens/Documentation_Home';
import DocumentationGettingStarted from './Screens/Docs/Documentation_Screens/Documentation_GettingStarted';
import DocumentationProducts from './Screens/Docs/Documentation_Screens/Documentation_Products';
import DocumentationPlans from './Screens/Docs/Documentation_Screens/Documentation_Plans';
import DocumentationIntegrations from './Screens/Docs/Documentation_Screens/Documentation_Integrations';
import DocumentationReleases from './Screens/Docs/Documentation_Screens/Documentation_Releases';
import DocumentationSupport from './Screens/Docs/Documentation_Screens/Documentation_Support';
/////////////////////////////////////////////**************AUTH SCREENS*************///////////////////////////////////////////////////////////
import SolutionsLayout from './Screens/Solutions/SolutionsLayout';

import { Route, Routes } from 'react-router-dom';
import './App.css';

const ROLES = {
    'User': 10,
    'Customer': 12,
    'Admin': 11
};

function App() {
    const [colorScheme, setColorScheme] = useState(localStorage.getItem('colorScheme'));
    const toggleColorScheme = () => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

    useEffect(() => {
        const getColorScheme = () => {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches && localStorage.getItem('colorScheme') === 'dark') {
                setColorScheme('dark')
            } else {
                setColorScheme('light')
            }
        }
        getColorScheme()
    }, [])

    useEffect(() => {
        const setColorScheme = () => {
            if (colorScheme === 'dark') {
                localStorage.setItem("colorScheme", "dark");
            }
            if (colorScheme === 'light') {
                localStorage.setItem("colorScheme", "light");
            }
        }
        setColorScheme()
    }, [toggleColorScheme])



    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                theme={{
                    colorScheme,
                    // colors: {
                    //   'orange': ['#fc6400']
                    // }
                    primaryColor: colorScheme === 'dark' ? 'orange' : 'pink'
                }}
                withGlobalStyles
                withNormalizeCSS
            >
                <Routes>
                    <Route element={<PersistLogin />}>

                        <Route path='/' element={<Layout />}>
                            <Route index element={<SolutionsLayout />} /> {/* Homepage Route */}


                            {/*********************** USER PROFILES ******************************/}
                            <Route element={<RequireAuth allowedRoles={[ROLES.Customer, ROLES.Admin, ROLES.User]} />}>
                                <Route element={<RequireProfileAuth />}>
                                    <Route path='profile/:id' element={<ProfileLayout />}>
                                        <Route path='info' element={<Info />} />
                                        <Route path='data+profiles' element={<DataProfiles />} />
                                    </Route>
                                </Route>
                            </Route>

                            {/*********************** PRICING ******************************/}
                            <Route path='pricing' element={<Pricing />} />

                            <Route element={<PricingRequireAuth allowedRoles={[ROLES.Customer, ROLES.Admin, ROLES.User]} />} >
                                <Route path='getstarted/:plan/customize' element={<PricingPlan />} />
                                <Route path='getstarted/:plan/checkout' element={<Checkout />} />
                            </Route>

                            {/*********************** DEMOGRAPHIC PROFILES ******************************/}
                            <Route path='/market+report/:id' element={<DPLayout />}> {/* Dashboards */}
                                <Route path='overview' index element={<Overview />} />
                            </Route>

                            {/*********************** FEATURES ******************************/}
                            <Route path='dashpond+features' element={<Features />} />

                            {/*********************** DOCUMENTATION ******************************/}
                            <Route path='documentation' element={<DocsLayout />}>
                                <Route path='home' element={<DocumentationHome />} />
                                <Route path='getting+started' element={<DocumentationGettingStarted />} />
                                <Route path='products' element={<DocumentationProducts />} />
                                <Route path='plans' element={<DocumentationPlans />} />
                                <Route path='integrations' element={<DocumentationIntegrations />} />
                                <Route path='releases' element={<DocumentationReleases />} />
                                <Route path='support' element={<DocumentationSupport />} />
                            </Route>

                            {/*********************** PRODUCTS ******************************/}
                            {/* <Route path='products' element={<ProductLayout />}> */}
                            <Route element={<RequireAuth allowedRoles={[ROLES.Customer, ROLES.Admin]} />}>
                                <Route path='property+search' element={<DashLayout />}> {/*Input for paying cutomers */}
                                    <Route path='address+input' element={<AddressInput />} />
                                    <Route path='address+input/map+confirmation' element={<MapModal />} />
                                    <Route path='address+input/map+confirmation/image+upload' element={<FileUploader />} />
                                </Route>
                            </Route>
                            {/* </Route> */}

                            {/*********************** SOLUTIONS ******************************/}
                            <Route path='solutions' element={<SolutionsLayout />}>

                            </Route>



                            {/*********************** CONTACT ******************************/}
                            <Route path='contact' element={<Contact />} />

                            {/*********************** 404 MISSING  ******************************/}
                            <Route path='*' element={<Missing />} /> {/* 404 Route */}

                            {/*********************** AUTH SCREENS ******************************/}
                            <Route path='login' element={<Login />} />
                            <Route path='register' element={<Register />} />
                            <Route path='already+logged+in' element={<AlreadyLoggedIn />} />
                        </Route>


                    </Route>
                </Routes>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;
