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
        children.push(<div>Overview</div>)

        var images = []
        for(let i = 0; i < this.state.logos.length; i++){
            images.push(<IconComponent isLinked={false} logo={this.state.logos[i]} width="25px"/>)
        }
        children.push(<Row>{images}</Row>)
        return <div>{children}</div>
    }

    buildResumeDownloads(){
        var children = [];
        children.push(<div>Resume</div>)
        children.push(<Row><img src={download} className="download-img"></img><a href={pdf} download className="download-link">Download</a></Row>)
        return <div>{children}</div>
    }
    
    render() {
        var children = []
        children.push(this.buildOverview());
        children.push(<div className="spacer"></div>)
        children.push(this.buildResumeDownloads()); 
        return <div>{children}</div>;
    }
}
 
export default ResumePage;