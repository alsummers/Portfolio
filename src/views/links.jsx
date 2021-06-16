import React, { Component } from 'react';
import IconComponent from '../components/icon-img-component';
import Divider from '../components/divider';
import {Row, Col} from 'reactstrap';
import linkedIn from '../img/logos/linkedin_icon_sm.png';
import github from '../img/logos/github_icon_sm.png';
import './links.css';
import '../components/animation.css'
import { BsEnvelopeFill } from "react-icons/bs";
import { IconContext } from "react-icons";

class LinksPage extends Component {
    state = { 
        links: [
            {
                logo:linkedIn,
                link:'https://www.linkedin.com/in/allisonsummers/'
            },
            {
                logo:github,
                link: 'https://github.com/alsummers'
            }
        ]
     }

    buildContacts(){
        return <Row key="contacts" className="contacts">
                <IconContext.Provider value = {{color: "silver", size:"2em"}}>
                    <BsEnvelopeFill />
                </IconContext.Provider>
            <div className="email">allisonsummers44@gmail.com</div>
        </Row>
    }

    buildIcons(){
        var children = [];
        for(let i = 0; i < this.state.links.length; i++){
            children.push(<IconComponent key={i} width="60px" isLinked={true} link={this.state.links[i].link} logo={this.state.links[i].logo}/>)
        }
        return <Row key="icons" className="icons">{children}</Row>
    }

    render() { 
        var children = []
        children.push(this.buildContacts())
        children.push(<div className="row-divider" key="divider"><Divider/></div>)
        children.push(this.buildIcons());
        return <div className="slide-left-transition-fade-in"><div className="container">{children}</div></div>
    }
}
 
export default LinksPage;