import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import alanTuringModifiedBlack from '../Pictures/alanTuringModifiedBlack.jpg';
import enigma from '../Pictures/enigma.jpg';
import bombe from '../Pictures/bombe.jpg';

function AlanTuring(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <Box style={{backgroundColor:"black"}}>
                <Grid container spacing={1} sx={{ backgroundColor: 'black'}}>
                    <Grid item xs={5}>
                        <h1 style={{textAlign: 'right', color:'white', paddingLeft:'40%', paddingTop: '40%'}}> Alan Turing</h1>
                        <p style={{textAlign: 'right', color:'white', paddingLeft: '20%'}}>
                        Alan Turing was a British mathematician that had a huge impact on multiple engineering projects at Bletchley 
                        Park (Copeland, n.d.a). His work there also influenced his thoughts on the intelligence of machines and led 
                        him to become one of the founders of artificial intelligence (Copeland, n.d.a). 
                        </p>
                    </Grid>
                    <Grid item xs={6} >
                        <img src={alanTuringModifiedBlack} style={{width:'90%', paddingTop: '5%', paddingBottom: '30%'}}/>
                    </Grid>
                </Grid>
            </Box>

            <Box style={{backgroundColor:"white"}}>
                <Grid container spacing={1} sx={{ backgroundColor: 'white'}}>
                    <Grid item xs={5} >
                        <img src={enigma} style={{ width:'40%', paddingLeft:'30%', paddingTop: '15%'}}/>
                        <img src={bombe} style={{width:'40%', paddingLeft:'30%', paddingTop: '10%', paddingBottom: '10%'}}/>
                    </Grid>
                    <Grid item xs={7}>
                        <h1 style={{textAlign: 'left', color:'black', paddingRight: '10%', paddingTop: '10%'}}>During the War</h1>
                        <p style={{textAlign: 'left', color:'black', paddingRight: '10%'}}>
                        During the war, the Nazis sent messages to each other using Enigma machine encryption (Copeland, n.d.a). 
                        Unlike the more destructive forms of engineering seen in other wars (atom bombs, guns, etc.) a different 
                        wartime engineering project was taking place as Alan Turing  helped lead the development of a decryption 
                        machine called the Bombe that was made to decrypt these messages (Copeland, n.d.a). The machine was 
                        based off an earlier Polish version called the Bomba that was rendered ineffective after the Nazis 
                        altered their encryption procedures (Copeland, n.d.a). After a collaboration between the Polish and 
                        British (Grey 2012, 274), this technopolitical artifact was created. With this innovation, the Allied 
                        forces were able to leverage this engineering feat for political advancement as it provided them with 
                        critical information about Nazi plans and would help them prepare for advances (Copeland, n.d.a). Soon 
                        after its creation, 39,000 messages were being decoded per month and eventually ramped up to 84,000 
                        messages per month (Copeland, n.d.a). The Bombe was specifically noted to help the Allies not be 
                        overrun by German U-Boats in the Battle of the Atlantic (Smith 2017, 9). Without this collaboration 
                        between countries and their similar political goals, the Bombe may not have been created in time to be 
                        of use, which would have probably cost many more lives. International cooperation helped advance 
                        technology at a pace that is likely faster than what these countries could have done on their own. 
                        </p>
                    </Grid>
                </Grid>
            </Box>

            <Box style={{backgroundColor:"white"}}>
                <Grid container spacing={1} sx={{ backgroundColor: 'white'}}>
                    <Grid item xs={5} >
                        <img src={bombe} style={{ width:'70%', paddingLeft:'10%', paddingTop: '35%'}}/>
                    </Grid>
                    <Grid item xs={7}>
                        <h1 style={{textAlign: 'left', color:'black', paddingRight: '10%', paddingTop: '10%'}}>After the War</h1>
                        <p style={{textAlign: 'left', color:'black', paddingRight: '10%', paddingBottom: '20%'}}>
                        After the war, Alan Turing still had a major influence on the world we live in today through his thoughts 
                        on artificial intelligence. During his time at Bletchley Park, Turing spoke about his ideas on 
                        intelligent computers to his peers. Turing saw great potential in what was possible with the machines 
                        he was working with. Although he never got to see it in action, he started to wonder and share these 
                        possibilities with others. In one case, he spoke about a computer’s ability to play chess by changing 
                        its own program due to its experience (Copeland, n.d.b). Similar to the Chess-Playing Turk, he had a 
                        vision of a machine that seemed to learn and think on its own and hide the underlying logic and 
                        mechanics behind these decisions. <br />  <br />
                        Although Alan Turing was never able to formally talk about the work he did in Bletchley Park due to 
                        secrecy, his experience there showed him what was possible with technology. He continued to speak about 
                        machine intelligence, share his ideas, and shape what we know today as artificial intelligence. Soon 
                        after the war ended, he published a paper on machine intelligence that included details about the Turing 
                        Test. This test is still in use today and has never been passed by a machine (Copeland, n.d.b). Today, 
                        artificial intelligence is used in many facets of our lives, however problems have arisen due to the 
                        training of these machines. As humans train machines using human picked data, biases creep into these 
                        systems and can lead unwanted outcomes such as discrimination and oppression.

                        </p>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default AlanTuring;