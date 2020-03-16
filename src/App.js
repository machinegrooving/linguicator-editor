import React from 'react';
import Content from './components/Content';
import Header from './components/Header';
import './App.css';
import 'antd/dist/antd.css';


/**
 * App components aggregator.
 *
 * @component
 */
function App()
{
    return (
        <div className='app-container'>
            <Header />
            <Content />
        </div>
    );
}


export default App;
