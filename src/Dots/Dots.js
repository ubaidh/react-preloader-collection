import React from 'react'
import './Dots.css';

const Dots=(props)=> {
  const bg= props.bg;
  const back={
    backgroundColor:`${bg}`
}
  return (
    <div style={back} className="outline">
    <div className="loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  )
}

export default Dots;
