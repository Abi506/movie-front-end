import React, { Component } from 'react';
import './index.css'
import Url from '../../config'

class videoUpload extends Component {
    state = {
        movieName:'',
        url:'',
        cast:'',
        is_Success:false,
        id:''

    }

    idEvent=(event)=>{
        this.setState({id:event.target.value})
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
        //const apiurl=`${Url}/upload-movies/`;
         const apiurl = `${Url}/upload-movies/`;
        //const apiurl=`http://localhost:3001/upload-movies/`
        //const apiurl=`http://localhost:3001/upload-movies/`
        const{id,url,movieName,cast}=this.state;
        const movieDetails={id,url,movieName,cast};
        console.log('movie Details',movieDetails)
        const options={
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(movieDetails),
              
        }
        console.log(options.body);
        const response=await fetch(apiurl,options)
        console.log(response,'response');
        const data=await response.json();
        console.log(data,'data');
        this.setState({url:"",movieName:"",cast:"",is_Success:true,id:""})
      
    }

    render(){
        const {url,movieName,cast,is_Success,id}=this.state 
        return(
            <div className='upload-container'>
                <h1>movie upload </h1>
                <form onSubmit={this.submitEvent}>
                <div>
                    <label>Movie id</label>
                    <br/>
                    <input type="text" onChange={this.idEvent} value={id}/>
                    </div>
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
                    {is_Success===true &&(
                        <p>Movie Uploaded Successfully</p>
                    )}
                </form>
                
            </div>
        )
    }
}

export default videoUpload