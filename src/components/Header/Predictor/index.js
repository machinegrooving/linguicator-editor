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
    const predictor = useSelector(state => state.predictions);

    return(
        <Popover
            content={
                <p style={{
                    color: '#432f44'
                }}
                >
                    {predictor.prediction}
                </p>
            }
            visible = {predictor.hasPrediction}
            placement="bottomRight"
            style={{
                color: '#a7425c'
            }}
        >
                <Icon
                    component={Salami}
                    style={{
                        fontSize: '45px',
                        marginRight: 10,
                    }}
                    spin={predictor.isPredicting}
                />
        </Popover>
    );
}


export default Predictor;
