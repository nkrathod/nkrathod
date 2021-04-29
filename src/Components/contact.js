import React, { Component } from 'react';


export default class Contact extends Component{
    render(){
        return(
            <div className="portfolio">
                <h1>Get in touch</h1>
                <hr/>
                <h5><i class="fa fa-map-marker" aria-hidden="true"></i> Address :</h5>
                <p>C-4, Pitale Complex, Thergaon, Pune - 411033.</p>
                <h5><i class="fa fa-mobile" aria-hidden="true"></i> Call me :</h5>
                <p>+91 8007800858 <i class="fa fa-whatsapp" aria-hidden="true"></i></p>
                <h5><i class="fa fa-envelope" aria-hidden="true"></i> Enquiries :</h5>
                <p>nkrsoft.tech@gmail.com</p>
                <p><br/></p>
                <p><span className="center1"><span className="pulse">a</span></span> I am available for freelance</p>
            </div>
        )
    }
}