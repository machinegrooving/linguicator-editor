import React from 'react';
import { useEffect, useState } from 'react';
import Identity from './Identity';
import Logo from './logo.png';
import Settings from './Settings';
import StatusIndicator from './StatusIndicator';
import PropTypes from 'prop-types';
import './Header.css'


const CONNECTION = {
    0: {
        message: 'connecting',
        color: '#b5982d'
    },
    1: {
        message: 'connected',
        color: '#39963f'
    },
    2: {
        message: 'closing',
        color: '#b5982d'
    },
    3: {
        message: 'closed',
        color: '#a83232'
    }
};


/**
 * Linguiçator editor header component.
 *
 * @component
 */
function Header({socketState})
{
    // component state hooks
    const [status, setStatus] = useState(CONNECTION[socketState].message);
    const [colorCode, setColorCode] = useState(CONNECTION[socketState].color);


    /**
     * I am called whenever connection to predictor state changes.
     */
    useEffect(() =>
    {
        setStatus(CONNECTION[socketState].message);
        setColorCode(CONNECTION[socketState].color);
    }, [socketState]);


    return (
        <header className="header-container">
            <Identity
                logo={Logo}
                brand={"Lingüiçator"}
            />
            <div className="header-carret">
                <StatusIndicator
                    color={colorCode}
                    message={status}
                />
                <Settings />
            </div>
        </header>
    );
}


Header.propTypes = {
    /**
     * Websocket connection to predictor current status.
     */
    socketState: PropTypes.number.isRequired
}


export default Header;
