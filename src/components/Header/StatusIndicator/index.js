import React from 'react';
import { Popover, Typography } from 'antd';
import PropTypes from 'prop-types';


/**
 * Websocket connection status indicator component.
 *
 * @component
 */
function StatusIndicator({color, message})
{
    return (
        <div className='connection-status'>
            <Popover
                content={
                    <p style={{ color: '#a7425c' }}>
                        {`Predictor is ${message}!`}
                    </p>
                    }
                    placement="bottom"
                    trigger="hover"
                    align={{offset: [0, 8]}}
            >
                <Typography>
                    <div
                        className='connection-status'
                        style={{
                            backgroundColor: color
                        }}
                    />
                </Typography>
            </Popover>
        </div>
    );
}


StatusIndicator.propTypes = {
    /**
     * Connection indicator current color.
     */
    color: PropTypes.string.isRequired,

    /**
     * Connection indicator current message.
     */
    message: PropTypes.string.isRequired
}


export default StatusIndicator;
