import React from 'react';
import './Circledots.css';
const Circledots=(props)=> {
    const bg= props.bg;
    const back={
      backgroundColor:`${bg}`
    }
      return (    
        <div style={back} className="holder" >
        <div className="preloader"  >
        <div></div>
        <div></div><div></div>
        <div></div><div></div>
        <div></div><div></div>
        <div></div><div></div>
        <div></div></div>
      </div>
      );
      }

  export default Circledots;
  
