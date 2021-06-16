import React, { Component } from 'react';
import {Row} from 'reactstrap';
import IconComponent from '../components/icon-img-component';
import react from '../img/logos/React-icon_sm.png'
import angular from '../img/logos/angular_icon_small.png';
import flutter from '../img/logos/flutter_logo.png';
import node from '../img/logos/node_icon_sm.png';
import html from '../img/logos/html_logo.png';
import css from '../img/logos/css_logo.png';
import js from '../img/logos/js_logo.png';
import download from '../img/logos/download_arrow_sm.png';
import pdf from './Allison_Summers_Resume.pdf';
import './resume.css';
import '../components/animation.css';

class ResumePage extends Component {
    state = { 
        logos: [
            react,
            angular,
            flutter,
            node,
            html,
            css,
            js
        ]
     }

    buildOverview(){
        var children = [];

        var images = []
        for(let i = 0; i < this.state.logos.length; i++){
            images.push(<IconComponent key={i}isLinked={false} logo={this.state.logos[i]} width="25px"/>)
        }
        children.push(<Row>{images}</Row>)
        return <div className="slide-left-transition-fade-in">{children}</div>
    }

    buildResumeDownloads(){
        var children = [];
        children.push(<div key="resume-title" className="slide-left-transition-fade-in"><div className="resume-title">Resume</div></div>)
        children.push(<div key="download-img" className="fade-in"><Row className="download-content"><img src={download} className="download-img"></img><a href={pdf} download className="download-link">Download</a></Row></div>)
        return <div>{children}</div>
    }
    
    render() {
        var children = []
        children.push(this.buildOverview());
        children.push(this.buildResumeDownloads()); 
        return <div>{children}</div>;
    }
}
 
export default ResumePage;