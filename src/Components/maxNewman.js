import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import maxNewman from '../Pictures/maxNewman.jpg';
import colossus from '../Pictures/colossus.jpg';
import manchesterBaby from '../Pictures/manchesterBaby.jpg';

function MaxNewman(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <Box style={{backgroundColor:"white"}}>
                <Grid container spacing={1} sx={{ backgroundColor: 'white'}}>
                    <Grid item xs={7}>
                        <p style={{textAlign: 'left', color:'black', paddingLeft: '3%', paddingTop: '5%'}}>Max Newman had a significant impact on the decryption efforts of World War 2 and the development of computers we 
                        know today.
                        </p>
                    </Grid>
                    <Grid item xs={5} >
                        <img src={maxNewman} style={{width:'80%', paddingRight:'20%', paddingTop: '10%', paddingBottom: '10%'}}/>
                    </Grid>
                </Grid>
            </Box>

            <Box style={{backgroundColor:"white"}}>
                <Grid container spacing={1} sx={{ backgroundColor: 'white'}}>
                    <Grid item xs={7}>
                        <h1 style={{textAlign: 'left', color:'black', paddingLeft: '3%'}}>During the War</h1>
                        <p style={{textAlign: 'left', color:'black', paddingLeft: '3%'}}>As the war progressed, German encryption advanced. One of these was the advancements was the Tunny encryption 
                        which encrypted messages from Hitler and his high officials to the battleground Due to the fact that these messages 
                        came from highly authoritative people, great urgency was placed in this government facility in breaking its code 
                        [9, pg 52] and high pressure was placed on these workers [9, p 52] to solve this complex problem quickly [9, p62]. 
                        One of Newman’s greatest influences on Bletchley Park was his work on the Colossus which would decrypt the Tunny 
                        messages [4]. This was done by automating the hand calculations Turing developed to decode the messages [4]. Using 
                        mechanical processes to speed up the work done by hand, the Allies were able to decode messages in time to utilize 
                        them to their advantage [4]. By the end of the war nine Colossi were made [4]. <br />  <br />
                        With the leverage gained from this machine, the Allied governments were able to gain intel on the Nazis and utilize 
                        this to their political advantage. This was evident on D-Day. Using the Colossus, the Allies discovered Hitler was 
                        aware of the Normandy attack but believed it was a ploy to draw out German troops and that the real attack would be 
                        5 days later [9, p80-81]. With the leverage gained with this, the Allies knew that the Germans would not be prepared 
                        for a full invasion [9, p80-81]. When Hitler tried to retaliate, his message was also decrypted, and led to a huge 
                        defeat and allowed the Allies to swiftly gain territory and eventually the defeat of the Nazis[9, p80-81]. President 
                        Eisenhower stated that the leverage these machines brought shortened the war by two years[9, p80-81].
                        </p>
                    </Grid>
                    <Grid item xs={5} >
                        <img src={colossus} style={{width:'80%', paddingLeft:'5%', paddingTop: '25%', paddingBottom: '10%'}}/>
                    </Grid>
                </Grid>
            </Box>
            
            <Box style={{backgroundColor:"white"}}>
                <Grid container spacing={1} sx={{ backgroundColor: 'white'}}>
                    <Grid item xs={7}>
                        <h1 style={{textAlign: 'left', color:'black', paddingLeft: '3%'}}>After the War</h1>
                        <p style={{textAlign: 'left', color:'black', paddingLeft: '3%'}}>
                        Despite its origins in wartime engineering Max Newman's creations were able to develop into commercializable uses. 
                        After the war, Max Newman created a computing group at the University of Manchester and brought several parts of 
                        the Colossus with him [5]. His group worked on creating the Small Scale Electronic Machine or “Baby” which was the 
                        “first working digital electronic stored program computer” [5]. This working prototype led to the Ferrenti Mark 1 
                        which became the world’s first commercial general purpose computer and is a precursor of the computers we use today 
                        [10]. Newman’s time at Bletchley Park made him believe in the power and importance of computing. Thomas Flowers, 
                        Newman’s colleague at Bletchley, pointed out that without the urgency to develop during the war, Newman may have not 
                        gained the experience and confidence in electronics needed to build the first “stored-program digital computer” 
                        </p>
                    </Grid>
                    <Grid item xs={5} >
                        <img src={manchesterBaby} style={{width:'80%', paddingLeft:'5%', paddingTop: '15%', paddingBottom: '20%'}}/>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default MaxNewman;