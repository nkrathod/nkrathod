import React, { Component } from 'react';
import MyResume from '../assets/Nitesh_Software_Dev.pdf'


export default class Resume extends Component{
    render(){
        return(
            <div style={{ height: '100%', width: '100%',}}>
                <h1>Resume</h1>
                <iframe src={MyResume} width="100%" height="80%"></iframe>
            </div>
        )
    }
}