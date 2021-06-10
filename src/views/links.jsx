import React, { Component } from 'react';
import IconComponent from '../components/icon-img-component';
import {Row} from 'reactstrap';
import linkedIn from '../img/logos/linkedin_icon_sm.png';
import github from '../img/logos/github_icon_sm.png';

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

    render() { 
        var children = []
        for(let i = 0; i < this.state.links.length; i++){
            children.push(<IconComponent width="60px" isLinked={true} link={this.state.links[i].link} logo={this.state.links[i].logo}/>)
        }
        return <Row>{children}</Row>
    }
}
 
export default LinksPage;