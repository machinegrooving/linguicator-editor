import React from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
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
            <Footer />
        </div>
    );
}


export default App;
