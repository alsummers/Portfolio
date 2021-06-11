import React, { Component } from 'react';
import {Row} from 'reactstrap';
import './component.css';


class ConstructionScreen extends Component {
    state = {  }
    render() { 
        return <div className="under-construction-container"><div className="under-construction-header">404</div><Row>Currently under construction...</Row></div>;
    }
}
 
export default ConstructionScreen;