import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header style={headerStyle}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h1>TODO LIST</h1>
            <Link style = {LinkSty} to="/"> Home </Link>&nbsp;|&nbsp;
            <Link style = {LinkSty} to="/favourites"> Favourites </Link>&nbsp;|&nbsp;
            <Link style = {LinkSty} to="/bin"> Bin </Link>&nbsp;|&nbsp;
            <Link style = {{paddingLeft: '10px', paddingRight: '10px', color: '#ccc'}} to="/search"><i className="fa fa-search"></i></Link>&nbsp;|&nbsp;
            <Link style = {LinkSty} to="/about"> About </Link>
        </header>
    )
}

const LinkSty = {
    color: '#ccc',
    fontWeight: 'bold'
}
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    maxWidth: '3000px'
}