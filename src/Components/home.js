import bletchleyPark from '../Pictures/bletchleyPark.jpg';
import Box from '@mui/material/Box';
import '../Style/style.css'
import React, { useState, useEffect } from 'react';

console.log(bletchleyPark)
function Home(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <Box style={{backgroundColor:"white", height:"100%"}}>
            <img src={bletchleyPark} className="backImg"/>
            <h1 className="header">Bletchley Park</h1>
            <div style={{paddingLeft:"10%", paddingRight:"10%", paddingTop: "5%", paddingBottom: "5%"}}>
                <h1 className="bottomBorderText"> About </h1>
                <p style={{paddingTop: "1%"}}>
                In 1938 in Buckinghamshire, England, little did the locals know of the operations that would soon take place in 
                their small town of Bletchley (Smith 2017, 148). Bletchley Park would eventually become the birthplace for 
                groundbreaking innovation in computation and codebreaking. The workers of Bletchley Park, including those a part 
                of the Women’s Royal Naval Service, coined Wrens, aided in war efforts by operating the “first large-scale 
                electronic computer[s]” (Copeland, n.d.c) to intercept encoded enemy messages (Abbate 2012, 15-16). Bletchley Park 
                would be shrouded in immense secrecy even after its operations eventually ceased in 1946 after World War II 
                (Grey 2012, 278). Despite its closure, the work that took place there would go on to foster influential figures to 
                modern engineering such as Alan Turing and Max Newman. It is clear to see that the engineers and engineering 
                projects from Bletchley Park have made a major impact on the world both in the past and in the present.
                </p>
            </div>
        </Box>
    )
}

export default Home;