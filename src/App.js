import React from 'react';
import { useState, useRef, useEffect } from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import config from './config/config.json';
import './App.css';
import 'antd/dist/antd.css';


const CONNECTION_ADDRESS = `ws://${config['HOST']}:${config['PORT']}`


/**
 * App components aggregator.
 *
 * @component
 */
function App()
{
    // component state hooks
    const socket = useRef(null);
    const [socketState, setSocketState] = useState(0);


    /**
     * I am called when this component is mounted.
     */
    useEffect(() =>
    {
        // create websocket connection
        socket.current = new WebSocket(CONNECTION_ADDRESS);

        // on connection opened event callback
        socket.current.onopen = (event) =>
        {
            console.log('Websocket connection established.')
            setSocketState(socket.current.readyState);
        }

        // on connection closed event callback
        socket.current.onclose = (event) =>
        {
            console.log("Websocket connection closed.");
            setSocketState(socket.current.readyState);
        }

        // on websocket error event callback
        socket.current.onerror = (event) =>
        {
            console.log('Websocket error: ', {event});
            setSocketState(socket.current.readyState);
        }

        // cleanup on lifecycle end
        return () => socket.current.close();

    }, []);


    return (
        <div className='app-container'>
            <Header socketState = {socketState}/>
            <Content />
            <Footer />
        </div>
    );
}


export default App;
