import React, { useState } from 'react';


const Main = (props) => {
    const [position, setPosition] = useState( {lat: 0, long:0} ); 

    const handlePosition = (event) => {
        navigator.geolocation.getCurrentPosition( (position) => {
            setPosition({ lat: position.coords.latitude, long: position.coords.longitude})
        })
        //postion.lat / position.long
    }

    return (
        <div>
            <h1>Eu sou o Main</h1>
            <button onClick={(event) => handlePosition(event)}>pegar posição</button>
            <p>Latitude: {position.lat}</p>
            <p>longitude: {position.long}</p>
        </div>
    );

}

export default Main;