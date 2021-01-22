import React from 'react';
//import { Link } from 'react-router-dom';

export default function Welcome() {
    return (<>
        <header style={headerStyle}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h1>MOVIES' BUCKET</h1>
            <i className="fa fa-film" style={{fontSize: '50px'}}></i>
        </header>
        </>
    )
}

// const LinkSty = {
//     color: '#ccc',
//     fontWeight: 'bold',
//     textDecoration: 'none'
// }
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    maxWidth: '3000px'
}