import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import maxNewmanModified from '../Pictures/maxNewmanModified.jpg';
import colossus from '../Pictures/colossus.jpg';
import manchesterBaby from '../Pictures/manchesterBaby.jpg';

function MaxNewman(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div style={{backgroundColor:"black"}}>
            <Box style={{backgroundColor:"black"}}>
                <Grid container spacing={1} sx={{ backgroundColor: 'black'}}>
                    <Grid item xs={5}>
                        <h1 style={{textAlign: 'right', color:'white', paddingLeft:'40%', paddingTop: '40%'}}> Max Newman</h1>
                        <p style={{textAlign: 'right', color:'white', paddingLeft: '20%'}}>
                        Max Newman was a British mathematician who is known for his work on the Colossus machine which was created 
                        to break the Tunny encryption (Copeland, n.d.c). He later went on to the University of Manchester, with 
                        knowledge and machinery from Bletchley Park, to create some of the precursors of the computers we use today 
                        (History of Information, n.d).
                        </p>
                    </Grid>
                    <Grid item xs={6} >
                        <img src={maxNewmanModified} style={{width:'90%', paddingTop: '5%'}}/>
                        <p style={{textAlign: 'left', color:'white', paddingLeft: '40%', paddingRight: '10%', paddingBottom: '30%'}}>
                            Figure 1: A photograph of Max Newman (London Mathematical Society, n.d)</p>
                    </Grid>
                </Grid>
            </Box>

            <Box style={{backgroundColor:"white"}}>
                <Grid container spacing={1} sx={{ backgroundColor: 'white'}}>
                    <Grid item alignContent='center' justfyContent='center' xs={5} >
                    </Grid>                    
                    <Grid item xs={7}>
                        <h1 style={{textAlign: 'left', color:'black', paddingRight: '10%', paddingTop: '10%'}}>During the War</h1>
                    </Grid>
                    <Grid item xs={5} >
                        <img src={colossus} style={{ width:'70%', paddingLeft:'15%'}}/>
                        <p style={{textAlign: 'left', paddingLeft: '15%', paddingRight:'15%'}}>
                            Figure 2: A photograph of the Colossus machine (Good, 1945)</p>
                    </Grid>
                    <Grid item xs={7}>
                        <p style={{textAlign: 'left', color:'black', paddingRight: '10%'}}>
                        As the war progressed, German encryption advanced. One of these advancements was the Tunny encryption which encrypted messages from Hitler and his high officials to the battleground (Copeland 2006, 42) . Due to the fact that these messages came from highly authoritative people, great urgency was placed in this government facility in breaking its code and high pressure was placed on these workers (Copeland 2006,52) to solve this complex problem quickly (Copeland 2006, 62). One of Newman’s greatest influences on Bletchley Park was his work on the Colossus which would decrypt the Tunny messages (Copeland, n.d.c). This was done by automating the hand calculations Turing developed to decode the messages (Copeland, n.d.c). Using mechanical processes to speed up the work done by hand, the Allies were able to decode messages in time to utilize them to their advantage (Copeland, n.d.c). By the end of the war 10 Colossi were made (Abbate 2012, 13).  <br />  <br />
                        With the leverage gained from this machine, the Allied governments were able to gain intel on the Nazis and utilize this to their political advantage. This was evident on D-Day. Using the Colossus, the Allies discovered Hitler was aware of the Normandy attack but believed it was a ploy to draw out German troops and that the real attack would be 5 days later (Copeland 2006, 80-81). With the leverage gained with this, the Allies knew that the Germans would not be prepared for a full invasion (Copeland 2006,80-81). When Hitler tried to retaliate, his message was also decrypted, and led to a huge defeat and allowed the Allies to swiftly gain territory and eventually the defeat of the Nazis (Copeland 2006,80-81). President Eisenhower stated that the leverage these machines brought shortened the war by two years (Copeland 2006,80-81). 
                        <br />  <br />
                        Similar to the development of the nuclear bomb (Fetter-Vorm 2012), there was a political interest in advancing technology faster than the enemy (Copeland 2006, 52). With the pressure from political powers and the gravity of the situation of war, many of these workers, including Newman, put in great effort to create a new machine that would provide leverage for their country and the Allies. Without this engineering feat, it is unknown how many more lives may have been lost. The intel provided by the Colossus shaped some of the strategy used by the Allies and perhaps the outcome of battles and the war. 
                        </p>
                    </Grid>
                </Grid>
            </Box>

            <Box style={{backgroundColor:"white"}}>
                <Grid container spacing={1} sx={{ backgroundColor: 'white'}}>
                    <Grid item alignContent='center' justfyContent='center' xs={5} >
                    </Grid>  
                    <Grid item xs={7}>
                        <h1 style={{textAlign: 'left', color:'black', paddingRight: '10%'}}>After the War</h1>
                    </Grid>
                    <Grid item xs={5} >
                        <img src={manchesterBaby} style={{ width:'70%', paddingLeft:'15%'}}/>
                        <p style={{textAlign: 'left', paddingLeft: '15%', paddingRight:'15%'}}>
                            Figure 3: A photograph of the Manchester Baby (Science and Industry Museum, n.d.)</p>
                    </Grid>
                    <Grid item xs={7}>
                        <p style={{textAlign: 'left', color:'black', paddingRight: '10%', paddingBottom: '20%'}}>
                        Despite its origins in wartime engineering Max Newman's creations were able to develop into commercializable uses. After the war, Newman created a computing group at the University of Manchester and because the Colossi were destroyed upon the closure of Bletchley Park, he was only able to bring parts of the machine with him (Anderson 2013). His group worked on creating the Small Scale Electronic Machine or “Baby” which was the “first working digital electronic stored program computer” (Anderson 2013). This working prototype led to the Ferrenti Mark 1 which became the world’s first commercial general purpose computer and is a precursor of the computers we use today (History of Information, n.d).  <br />  <br />
                        Newman’s time at Bletchley Park made him believe in the power and importance of computing. Thomas Flowers, Newman’s colleague at Bletchley, pointed out that without the urgency to develop during the war, Newman may have not gained the experience and confidence in electronics needed to build the first “stored-program digital computer” (Copeland 2006, 63). The political influence on sites such as Bletchley Park gave people like Newman the exposure to these powerful machines that had so much potential and shaped his perception on what was possible with computing. The pressure of working in such an intense environment inspired him to dive into the unknown of this new field and has led to breakthroughs that shaped our lives today.
                        </p>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default MaxNewman;