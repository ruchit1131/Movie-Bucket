import React from 'react'
export default function About() {
    return (
        <React.Fragment>
            <div style={{background : '#888', color : '#ddd', display: 'flex', justifyContent: 'center'}}>
                <p style = {{maxWidth : '250px'}}>This is Movies Bucket App v1.0.0. You can use it to Search and manage Movies you want to watch.<br/>
                You can also watch the trailer of movies and  get all information about the movie from its rating to Plot.
                <br/>This app also has a bin feature so that if you accidentaly delete movies form the Bucket, you can restore them!
                <br/>I hope you find this App useful.<br/><br/>
                Developed by Ruchit Karnawat.<br/><br/>
                <a style = {{textDecoration: 'none'}} href = "https://github.com/ruchit1131">Github</a><br/>
                <a style = {{textDecoration: 'none'}} href = "https://www.linkedin.com/in/ruchit-karnawat-509a0b139/">Linkedin</a>
                <br/><br/>Enjoy! :)<br/></p>
            </div>
        </React.Fragment>
    )
}