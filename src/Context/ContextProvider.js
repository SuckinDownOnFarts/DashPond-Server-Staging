import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

// const initialState = {
//     chat: false,
//     cart: false,
//     userProfile: false,
//     notification: false
// }


export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [profileActive, setProfileActive ] = useState(false);
    const [screenSize, setScreenSize ] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);


    const handleProfileClick = () => setProfileActive((profileActive) => !profileActive);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value)
    };

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };



    return (
        <StateContext.Provider
            value={{ 
                activeMenu,
                setActiveMenu,
                profileActive, 
                setProfileActive,
                handleProfileClick,
                screenSize,
                setScreenSize,
                currentColor, 
                setCurrentColor,
                currentMode, 
                setCurrentMode,
                themeSettings,
                setThemeSettings,
                setMode, 
                setColor
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);