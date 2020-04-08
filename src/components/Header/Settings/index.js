import React from 'react';
import { useDispatch } from 'react-redux';
import { setMaxSize } from '../../../store/actions/predictions';
import { SettingFilled } from '@ant-design/icons';
import { Typography, Icon, Popover, Slider } from 'antd';
import 'antd/dist/antd.css';


/**
 * Settings selector component.
 *
 * @component
 */
function Settings()
{
    // action dispatch hook
    const dispatch = useDispatch();


    /**
     * I am a callback for prediction maximum size slider value changed.
     *
     * @param {number} size - new maximum prediction size
     *
     * @returns {undefined} - nothing
     */
    function setMaximumPredictionSize(size)
    {
        dispatch(setMaxSize(size));
    }


    return(
        <Popover
            content={
                <div>
                    <center>
                        <Typography.Text
                            style={{
                                color: '#a7425c'
                            }}
                        >
                            Prediction size:
                        </Typography.Text>
                    </center>
                    <Slider
                        min={20}
                        max={150}
                        defaultValue={75}
                        style={{
                            minWidth: 100,
                        }}
                        tooltipPlacement={"bottom"}
                        onAfterChange={setMaximumPredictionSize}
                    >
                    </Slider>
            </div>
            }
            trigger="hover"
        >
            <Icon
                component={SettingFilled}
                style={{ fontSize: '20px', color: '#a7425c' }}
            />
        </Popover>
    );
}


export default Settings;
