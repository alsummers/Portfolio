import React, { Component } from 'react';
import {Row} from 'reactstrap';
import './bio.css';
import profile from '../img/ioS_profile.jpg';

class BioPage extends Component {
    state = {  }

    profileImage(){
        var children = []
        
        children.push(<div className="divider"></div>);
        
        children.push(<img src={profile} className="photo"></img>)
        
        children.push(<div className="divider"></div>);


        return <Row className="header-row">{children}</Row>
    }

    bioContent(){
        return <Row className="bio-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Row>
    }
    render() { 
        var children = []
        children.push(this.profileImage())
        children.push(this.bioContent())
        return <div>{children}</div>;
    }
}
 
export default BioPage;