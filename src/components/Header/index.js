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
                <h1>Linguiçator</h1>
            </div>
            <div className="header-carret">
                <Popover
                    content={<p style={{ color: '#c03546' }}>Coming soon</p>}
                    trigger="hover"
                >
                    <Icon
                        type="setting"
                        style={{ fontSize: '25px', color: '#c03546' }}
                    />
                </Popover>
            </div>
        </header>
    );
}


export default Header;
