import React, { Component } from 'react';
import './component.css';

class IconComponent extends Component {
    state = {  }
    render() { 
        var child;

        if(this.props.isLinked){
            child = <a href={this.props.link} target="_blank"><img src={this.props.logo} width={this.props.width} className="icon-logo"></img></a>
        } else {
            child = <img src={this.props.logo} width={this.props.width} className="icon-logo"></img>
        }
        return child;
    }
}
 
export default IconComponent;