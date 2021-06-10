import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Row} from 'reactstrap';
import './navigation.css';

class Navigation extends Component {
    state = {
        pages : [
            'Bio',
            'Portfolio',
            'Resume',
            'Links'
        ],
        links : [
            '/about',
            '/portfolio',
            '/resume',
            '/links'
        ]
      }
    render() { 
        var headers = [];
        for (var i = 0; i < this.state.pages.length; i++){
            headers.push(<div className="title-text"><Link to={this.state.links[i]}>{this.state.pages[i]}</Link></div>)
        }
        return <Row className="Row-tec">{headers}</Row>;
    }
}
 
export default Navigation;