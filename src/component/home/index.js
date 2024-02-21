import React, { Component } from 'react';
import Url from '../../config'

class Home extends Component {
    state = {
        data:[]
    }

    componentDidMount() {
        this.getData();
    }

    getData=async()=>{
        const url=`${Url}/movies/`;
        const options={
            method:"GET"
        }
        const response=await fetch(url,options)
        console.log(response,'response');
        const data=await response.json();
        console.log(data,'data');
        this.setState({data:data})
    }

    render(){
        const {data}=this.state 
        return(
            <div>
                <h1>Home</h1>
                <ul>
                    {data.map(each=>(
                        <li key={each.id}>
                            <a href={each.url}>{each.movieName}</a> 
                            <p>{each.cast}</p>
                        </li>
                    ))}
                </ul>
                
            </div>
        )
    }
}

export default Home