import React, { Component } from 'react';
import './reset.css';

export class Showmovie extends Component {

    render() {
        
            let movie_data = JSON.parse(this.props.current_movie);

            var {Title, Type, Year, Rated, Language, Plot, Director, Actors, Runtime, Released, Genre, Country,imdbVotes, imdbRating, Poster} = movie_data;
        

        return (<>

            {Title ? <div id="details">
                <br/>
                <hr/>
                <br/>
                <h1 style={{padding: '5px', color: '#444', background: '#ddd', borderBottom: '2px solid grey', borderTop: '2px solid grey'}}>{Title}&nbsp;({Type}) &nbsp;&nbsp; {Year}</h1><br/>
                <h3 style={{padding: '5px', color: '#444'}}>IMDB Rating: &nbsp;{imdbRating}/10 &nbsp;|&nbsp; Votes: &nbsp;{imdbVotes}</h3><br/>
                <h3 style={{fontWeight: '400', lineHeight: '1.8', padding: '5px', color: '#444'}}>Rated: &nbsp;{Rated} &nbsp;|&nbsp; Runtime: &nbsp;{Runtime} &nbsp;|&nbsp; Gerne: {Genre} &nbsp;|&nbsp; Language:&nbsp; {Language} &nbsp;|&nbsp; Released &nbsp;{Released}({Country}) </h3><br/>
                
                <div>
                <img className="sidenav" src = {Poster !== 'N/A' ? Poster : "https://dummyimage.com/50x70/000000/fff.jpg&text=N/A"} style={{border: '2px solid black', padding: '5px', maxWidth:"500px", height:"auto", width:"100%" }} alt=""></img>
                <div className="content">
                    <div>
                    <p >{Plot}</p><br/><hr/><br/>
                    <h4 style={{color: '#aaa'}}>Director:&nbsp; {Director} &nbsp;|&nbsp; Actors: &nbsp;{Actors}</h4><br/><hr/><br/><br/>
                    </div>
                    <iframe  style = {vid_sty} src={this.props.trailer} allowFullScreen title={Title + "Trailer"} />

                </div>
                
                
                </div>
            </div> : ''}
        </>)
    }
}


const vid_sty = {
    padding: '5px', 
    maxWidth:"460px", 
    height:"290px", 
    width:"100%",
    display: 'inline' 
}

export default Showmovie
