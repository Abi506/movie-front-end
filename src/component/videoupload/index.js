import React, { Component } from 'react';
import './index.css'
import Url from '../../config'

class videoUpload extends Component {
    state = {
        movieName:'',
        url:'',
        cast:'',

    }

    movieNameEvent=(event)=>{
        this.setState({movieName:event.target.value});    
    }
    urlEvent=(event)=>{
        this.setState({url:event.target.value});    
    }
    castEvent=(event)=>{
        this.setState({cast:event.target.value});    
    }
    

    

    submitEvent=async(event)=>{
        event.preventDefault();
        const apiurl=`${Url}/upload-movies/`;
        const{url,movieName,cast}=this.state;
        const movieDetails={url,movieName,cast};
        const options={
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(movieDetails),
        }
        const response=await fetch(apiurl,options)
        console.log(response,'response');
        const data=await response.json();
        console.log(data,'data');
      
    }

    render(){
        const {url,movieName,cast}=this.state 
        return(
            <div className='upload-container'>
                <h1>movie upload </h1>
                <form onSubmit={this.submitEvent}>
                    <div>
                    <label>Movie Url</label>
                    <br/>
                    <input type="text" onChange={this.urlEvent} value={url}/>
                    </div>
                    <div>
                    <label>Movie Name</label>
                    <br/>
                    <input type="text" onChange={this.movieNameEvent} value={movieName}/>
                    </div>
                    <div>
                    <label>Movie Cast</label>
                    <br/>
                    <input type="text" onChange={this.castEvent} value={cast}/>
                    </div>
                    <div>
                        <button type="button" onClick={this.submitEvent}>Submit</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default videoUpload