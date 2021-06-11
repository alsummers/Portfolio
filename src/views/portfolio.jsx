import React, { Component } from 'react';
import {Row} from 'reactstrap';
import TrailsEndApp from './portfolio_views/trails-end-app';
import trailsEndLogo from '../img/trails-end-logo.png'
import ugallery from '../img/u-gallery-logo.png';
import swivylLogo from '../img/swivyl-logo.png';
import './portfolio.css';
class PortfolioPage extends Component {
    state = { 
        images: [
            {
                img: trailsEndLogo,
                text: 'Trail\'s End Mobile App'
            },
            {
                img: swivylLogo,
                text: 'Swivyl Management Website'
            },
            {
                img:ugallery,
                text: 'U-Gallery React Project'
            }
        ]
     }

    buildRows(){
        var children = [];
        for(let i = 0; i < this.state.images.length; i++){
            children.push(
                <div className="container">
                <img src={this.state.images[i].img} className="image"></img>
                <div className="overlay">
                    <div className="text">{this.state.images[i].text}</div>
                </div>
            </div>
            )
        }
        return <Row className="project-logos">{children}</Row>
    }
    render() { 
        return this.buildRows();
    }
}
 
export default PortfolioPage;