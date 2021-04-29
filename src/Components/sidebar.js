import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../nkrhome.css';

export default class Sidebar extends Component{
    render(){
        return(
            <div className="main">
                <p><span className="center1"><span className="pulse">a</span></span>I am available for freelance...</p>  
                <h2>
                    <span>W</span>
                    <span>e</span>
                    <span>l</span>
                    <span>c</span>
                    <span>o</span>
                    <span>m</span>
                    <span>e</span>
                </h2>
            
                <img className="img1" src="/Nitesh.jpg" alt="Nitesh_Rathod" />
                <h1 className="text">Nitesh Rathod</h1>
                <h3 className="text">Software Engineer</h3>
            
            
                <a href="#" className="stbtn" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Download Resume
                </a>
           
                <ul>
                    <li><a href="http://www.linkedin.com/in/nitesh-rathod-8841b09b">
                        <i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    </li>
                    
                    <li><a href="https://www.facebook.com/nitesh.rathod.5076"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="https://mail.google.com/mail/u/0/?tab=wm1#inbox?compose=CllgCJTGmpDtzPxJPZMdqCGGfpJJCfgQkvdKKbSvXxzKDGgxtRkwDWJmHBZwTcMTTmmtDcKmntg">
                        <i class="fa fa-google" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.instagram.com/niteshkumar_rathod"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
  
  
                <div className="slider"><i className="fa fa-lock" aria-hidden="true"></i></div>
            </div>
        )
    }
}