import React, { useEffect, useState } from 'react';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
/////////////////////////////////////////////**************LAYOUT*************///////////////////////////////////////////////////////////
import Layout from './components/LayoutGlobals/Layout';
/////////////////////////////////////////////**************SCREENS*************///////////////////////////////////////////////////////////
import DPLayout from './Screens/MarketReport/Layout/DPLayout';
import Missing from './Screens/404/Missing';
import Contact from './Screens/Contact/Contact';
/////////////////////////////////////////////**************CREATE DATA PROFILE SCREENS*************///////////////////////////////////////////////////////////
import AddressInput from './Screens/Property_Search/AddressInput';
import DashLayout from './Screens/Property_Search/Layout/DashLayout';
import FileUploader from './Screens/Property_Search/FileUploader';
import MapModal from './Screens/Property_Search/MapModal';
/////////////////////////////////////////////**************MARKET REPORTS SCREENS*************///////////////////////////////////////////////////////////
import Overview from './Screens/MarketReport/Sections/KeyTrends/KTLayout';
import TablesLayout from './Screens/MarketReport/Sections/Tables/TablesLayout'
import MapsLayout from './Screens/MarketReport/Sections/Maps/MapsLayout';
import PopLayout from './Screens/MarketReport/Sections/Population/PopLayout';
/////////////////////////////////////////////**************AUTH SCREENS*************///////////////////////////////////////////////////////////
import Register from './Screens/AuthScreens/Register';
import Login from './Screens/AuthScreens/Login';
import RequireAuth from './components/Auth/RequireAuth';
import PersistLogin from './components/Auth/PersistLogin';
import AlreadyLoggedIn from './Screens/AuthScreens/AlreadyLoggedIn';
/////////////////////////////////////////////**************USER PROFILE SCREENS*************///////////////////////////////////////////////////////////
import RequireProfileAuth from './components/Auth/RequireProfileAuth';
import ProfileLayout from './Screens/Profile/Layout/ProfileLayout';
import Info from './Screens/Profile/Info/InfoLayout';
import DataProfiles from './Screens/Profile/User_DataProfiles/DataProfilesLayout';
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

                            {/*********************** DEMOGRAPHIC PROFILES ******************************/}
                            <Route path='/market+report/:id' element={<DPLayout />}> {/* Dashboards */}
                                <Route path='key+trends' index element={<Overview />} />
                                <Route path='population' index element={<PopLayout />} />
                                <Route path='employment' index element={<TablesLayout />} />
                                <Route path='education' index element={<TablesLayout />} />
                                <Route path='income+earnings' index element={<TablesLayout />} />
                                <Route path='map+views' index element={<MapsLayout />} />
                                <Route path='tables' index element={<TablesLayout />} />
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


{/*********************** FEATURES ******************************/ }
{/* <Route path='dashpond+features' element={<Features />} /> */ }

{/*********************** DOCUMENTATION ******************************/ }
{/* <Route path='documentation' element={<DocsLayout />}>
    <Route path='home' element={<DocumentationHome />} />
    <Route path='getting+started' element={<DocumentationGettingStarted />} />
    <Route path='products' element={<DocumentationProducts />} />
    <Route path='plans' element={<DocumentationPlans />} />
    <Route path='integrations' element={<DocumentationIntegrations />} />
    <Route path='releases' element={<DocumentationReleases />} />
    <Route path='support' element={<DocumentationSupport />} />
</Route> */}

{/*********************** SOLUTIONS ******************************/ }
{/* <Route path='solutions' element={<SolutionsLayout />}>

</Route> */}


{/*********************** PRICING ******************************/ }
{/* <Route path='pricing' element={<Pricing />} />

<Route element={<PricingRequireAuth allowedRoles={[ROLES.Customer, ROLES.Admin, ROLES.User]} />} >
    <Route path='getstarted/:plan/customize' element={<PricingPlan />} />
    <Route path='getstarted/:plan/checkout' element={<Checkout />} />
</Route> */}