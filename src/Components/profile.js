import React, { Component } from 'react';


export default class Profile extends Component{
    render(){
        return(
            <div className="profile">
                <h1>Profile</h1>
                <hr/>
                <p id="title">"To work in a firm with a professional work driven 
                environment where I can utilize and apply my knowledge."</p>

                <h4>MERN Stack Developer</h4>
                <p>MERN stack is the name given to a set of JavaScript based technologies
                 used in developing web applications. MERN is the acronym name given to 
                 the set of technologies including Mongo DB, Express JS, React JS/ Redux and Node JS.</p>
                <h4>Professional Summary</h4>
                <p>Extensive experince in developing web pages using HTML/HTML5,
                 CSS/CSS3, JavaScript, ReactJS, Redux, JSON, Node.js, Bootstrap, AWS</p>
            </div>

        )
    }
}