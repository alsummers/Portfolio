import React, { Component } from 'react';
import {Row, Fade} from 'reactstrap';
import Divider from '../components/divider';
import './bio.css';
import '../components/animation.css';
import profile from '../img/ioS_profile.jpg';

class BioPage extends Component {
    state = {  }

    profileImage(){
        var children = []
        
        children.push(<Divider />);
        
        children.push(<img src={profile} className="photo"></img>)
        
        children.push(<Divider />);


        return <div className="slide-down-transition"><Row className="header-row">{children}</Row></div>
    }

    bioContent(){
        return <Row className="bio-text"><div className="slide-up-transition-fade-in-delay">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></Row>
    }
    render() { 
        var children = []
        children.push(this.profileImage())
        children.push(this.bioContent())
        return <div>{children}</div>;
    }
}
 
export default BioPage;