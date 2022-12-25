import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../../data/themeColors';
import { useStateContext } from '../../Context/ContextProvider';

const ThemeSettings = () => {
    const { setColor, setMode, currentMode, currentColor, setThemeSettings } =useStateContext();

    return (
        <div>ThemeSettings</div>
    )
}

export default ThemeSettings