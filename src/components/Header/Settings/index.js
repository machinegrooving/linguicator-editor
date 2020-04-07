import React from 'react';
import { Icon, Popover } from 'antd';


/**
 * Settings selector component.
 *
 * @component
 */
function Settings()
{
    return(
        <Popover
            content={<p style={{ color: '#a7425c' }}>Coming soon</p>}
            trigger="hover"
        >
            <Icon
                type="setting"
                style={{ fontSize: '25px', color: '#a7425c' }}
            />
        </Popover>
    );
}


export default Settings;
