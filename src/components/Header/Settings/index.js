import React from 'react';
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
