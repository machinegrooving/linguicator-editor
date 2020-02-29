import React from 'react';
import Logo from "./logo.png";
import { Icon, Popover } from 'antd';
import './Header.css'


/**
 * Linguiçator editor header component.
 *
 * @component
 */
function Header()
{
    return (
        <header className="header-container">
            <div className="header-identity">
                <img
                    src={Logo}
                    alt="Linguiçator Logo"
                />
                <h1>Lingüiçator</h1>
            </div>
            <div className="header-carret">
                <Popover
                    content={<p style={{ color: '#a7425c' }}>Coming soon</p>}
                    trigger="hover"
                >
                    <Icon
                        type="setting"
                        style={{ fontSize: '25px', color: '#a7425c' }}
                    />
                </Popover>
            </div>
        </header>
    );
}


export default Header;
