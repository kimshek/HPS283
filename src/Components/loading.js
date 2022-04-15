import React, { useEffect, useState } from "react";
import rotor from '../Pictures/rotor.png';
import '../Style/loading.css'
import Header from './header';
console.log(rotor)



const Loading = props => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setShow(false);
    }, 5000);
  });

  return (show ? (
    <div>
        <div className="center">
        <img src={rotor} className="rotate" />
        
        </div>
        <h1 className="centerText">Loading</h1>
    </div>)
    : <Header />);
};

export default Loading;