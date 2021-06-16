import React, { Component } from 'react';

class Divider extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render() { 
        return <div className="divider" style={this.props.style}></div>;
    }
}
 
export default Divider;