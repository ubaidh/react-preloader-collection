import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Dots from './Dots/Dots';
import Ddefault from './Ddefault/Ddefault';
import Circledots from './Circledots/Circledots';
class Predoaders extends React.Component {
    render() { 
        const {name,backcolor} =this.props;
        switch(name){ 
        case "dots":
          return <Dots bg={backcolor || 'white'}/> 
        case "circledots":
          return <Circledots bg={backcolor || '#F44336'}/>
        default:
          return <Ddefault/>
        }
      }
    }
Predoaders.propTypes ={
    name:PropTypes.string,
    backcolor:PropTypes.string   
}  
ReactDOM.render(<Predoaders /> ,document.getElementById("App"));
