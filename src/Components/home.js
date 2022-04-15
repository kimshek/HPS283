import bletchleyPark from '../Pictures/bletchleyPark.jpg';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import '../Style/style.css'

console.log(bletchleyPark)
function Home(props) {
    return (
        <Box style={{backgroundColor:"white", height:"100%"}}>
            <img src={bletchleyPark} className="backImg"/>
            <h1 className="header">Bletchley Park</h1>
            <div style={{paddingLeft:"10%", paddingRight:"10%"}}>
                <h1 style={{textAlign: 'center'}}> About </h1>
                <p>In 1938 in Buckinghamshire, England, little did the locals know of the operations that would soon take place in their small town of Bletchley []. Bletchley Park would eventually become the birthplace for groundbreaking innovation in computation and codebreaking. The workers of Bletchley Park, including those a part of the Women’s Royal Naval Service, coined Wrens, aided in war efforts by creating and operating some of the world’s first __ computers to intercept coded messages []. Bletchley Park would be shrouded in immense secrecy even after its operations eventually ceased in 1946 after world war II []. Despite its closure, the work that took place there would go on to foster influential figures to modern engineering such as Alan Turing and Max Newman.</p>
            </div>
            <Box style={{backgroundColor:"black"}}>
                <Grid container spacing={1} sx={{ backgroundColor: 'black'}}>
                    <Grid item xs={5} >
                        <img src={bletchleyPark} style={{width:'100%', paddingLeft:'10%'}}/>
                    </Grid>
                    <Grid item xs={7}>
                        <h1 style={{textAlign: 'center', color:'white'}}> The Workers </h1>
                        <br />
                        <p style={{textAlign: 'center', color:'white'}}>Those who worked included the Wrens</p>
                    </Grid>
                </Grid>
            </Box>

        </Box>

    )
}

export default Home;