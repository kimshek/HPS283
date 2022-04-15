import bletchleyPark from '../Pictures/bletchleyPark.jpg';
import wrens from '../Pictures/WrensModified.jpg';
import maxNewman from '../Pictures/maxNewman.jpg';
import alanTuring from '../Pictures/alanTuring.jpg';
import Grid from '@mui/material/Grid';
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
            <div style={{paddingLeft:"10%", paddingRight:"10%", paddingTop: "1%", paddingBottom: "5%"}}>
                <h1 className="bottomBorderText"> About </h1>
                <p style={{paddingTop: "1%"}}>In 1938 in Buckinghamshire, England, little did the locals know of the operations that would soon take place in their small town of Bletchley []. 
                Bletchley Park would eventually become the birthplace for groundbreaking innovation in computation and codebreaking. The workers of Bletchley Park, including those a part of 
                the Women’s Royal Naval Service, coined Wrens, aided in war efforts by creating and operating some of the world’s first __ computers to intercept coded messages []. 
                Bletchley Park would be shrouded in immense secrecy even after its operations eventually ceased in 1946 after world war II []. Despite its closure, the work that took place 
                there would go on to foster influential figures to modern engineering such as Alan Turing and Max Newman.</p>
            </div>
            {/* <Box style={{backgroundColor:"black"}}>
                <Grid container spacing={1} sx={{ backgroundColor: 'black'}}>
                    <Grid item xs={5} >
                        <img src={wrens} style={{width:'80%', paddingLeft:'20%', paddingTop: '20%', paddingBottom: '10%'}}/>
                    </Grid>
                    <Grid item xs={7}>
                        <h1 style={{textAlign: 'left', color:'white', paddingLeft: "10%", paddingTop: '15%'}}> The Workers </h1>
                        <p style={{textAlign: 'left', color:'white', paddingLeft: "10%"}}>Those who worked included the Wrens</p>
                    </Grid>
                </Grid>
            </Box>
            <Box style={{backgroundColor:"black"}}>
                <Grid container spacing={1} sx={{ backgroundColor: 'black'}}>
                    <Grid item xs={7}>
                        <h1 style={{textAlign: 'right', color:'white', paddingRight: "10%", paddingTop: '15%'}}> Alan Turing </h1>
                        <p style={{textAlign: 'right', color:'white', paddingRight: "10%"}}>Those who worked included the Wrens</p>
                    </Grid>
                    <Grid item xs={5} >
                        <img src={alanTuring} style={{width:'80%', paddingRight:'20%', paddingTop: '10%', paddingBottom: '10%'}}/>
                    </Grid>
                </Grid>
            </Box>
            <Box style={{backgroundColor:"black"}}>
                <Grid container spacing={1} sx={{ backgroundColor: 'black'}}>
                    <Grid item xs={5} >
                        <img src={maxNewman} style={{width:'80%', paddingLeft:'20%', paddingTop: '10%', paddingBottom: '20%'}}/>
                    </Grid>
                    <Grid item xs={7}>
                        <h1 style={{textAlign: 'left', color:'white', paddingLeft: "10%", paddingTop: '15%'}}> Max Newman </h1>
                        <p style={{textAlign: 'left', color:'white', paddingLeft: "10%"}}>Those who worked included the Wrens</p>
                    </Grid>
                </Grid>
            </Box> */}

        </Box>

    )
}

export default Home;