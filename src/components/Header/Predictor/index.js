import React from 'react';
import { useSelector } from 'react-redux';
import { Popover, Icon } from 'antd';
import { ReactComponent as Salami } from '../salami.svg';


/**
 * Predictions hints component.
 *
 * @component
 */
function Predictor()
{
    // component state hooks
    const shouldSpin = useSelector(state => state.predictions.isPredicting);

    return(
        <Popover
            content={
                <p style={{
                    color: '#432f44'
                }}
                >
                    {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                </p>
            }
            placement="bottomRight"
            style={{
                color: '#a7425c'
            }}
            align={{offset: [0, -5]}}
        >
                <Icon
                    component={Salami}
                    style={{
                        fontSize: '45px',
                        marginRight: 10,
                    }}
                    spin={shouldSpin}
                />
        </Popover>
    );
}


export default Predictor;
