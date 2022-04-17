import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import wrensCropped from '../Pictures/wrensCropped.jpg';

function Workers(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <Box style={{backgroundColor:"black"}}>
                <Grid container spacing={1} sx={{ backgroundColor: 'black'}}>
                    <Grid item xs={5}>
                        <h1 style={{textAlign: 'right', color:'white', paddingLeft:'40%', paddingTop: '40%'}}>The Workers</h1>
                        <p style={{textAlign: 'right', color:'white', paddingLeft: '20%'}}>
                        While working at Bletchley Park, employees were sworn to secrecy (Grey 2012, 139), this is only one of 
                        the many measures that were put into place to ensure that their operations remained hidden. This 
                        organizational control also played a role in the gender dynamics that existed at Bletchley Park. For a 
                        long time, the work of female employees was concealed to the public (Abbate 2012, 34) despite their 
                        contributions to early computing. 
                        </p>
                    </Grid>
                    <Grid item xs={6} >
                        <img src={wrensCropped} style={{width:'90%', paddingTop: '5%', paddingBottom: '30%'}}/>
                    </Grid>
                </Grid>
            </Box>

            <Box style={{backgroundColor:"white"}}>
                <Grid container spacing={1} sx={{ backgroundColor: 'white'}}>
                    <Grid item xs={5} >
                        <img src={wrensCropped} style={{ width:'70%', paddingLeft:'10%', paddingTop: '40%'}}/>
                    </Grid>
                    <Grid item xs={7}>
                        <h1 style={{textAlign: 'left', color:'black', paddingRight: '10%', paddingTop: '10%'}}>Secrecy</h1>
                        <p style={{textAlign: 'left', color:'black', paddingRight: '10%'}}>
                        Arriving in the darkness of nightfall to a location only specified through a telegrammed summons 
                        (McKay 2012, 1-4), employees had no idea what role they were assigned to before their arrival at 
                        Bletchley Park (4). These measures would serve as a precursor to the secrets hidden away at Bletchley 
                        Park. During its operation, many forms of social engineering were used on employees. Upon arrival, 
                        workers were immediately told to sign the Official Secrets Act which would swear them to secrecy 
                        (Grey 2012, 139). This meant that employees were not allowed to disclose their occupations with 
                        anyone else, not even their families (Abbate 2012, 36). The grounds of Bletchley Park as well as 
                        the towns around it were also heavily surveilled by security officers (Grey 2012, 126). The operations 
                        of Bletchley Park were compartmentalized (124), a method which was also utilized in Los Alamos during 
                        the building of the atom bomb (Fetter-Vorm 2012). This organizational separation ensured that most 
                        employees were only aware of their individual tasks while the overarching purpose for Bletchley Park 
                        remained undecipherable (Grey 2012, 124-127). <br />  <br />
                        Bletchley Park would eventually cease operations in 1946 (Grey 2012, 278) at which documents and 
                        groundbreaking innovation, like the codebreaking Colossus, were destroyed (Abbate 2012, 34). Even 
                        with its closure, those who worked at Bletchley Park would not be able to discuss the work that 
                        they did there until the late 1970s (Copeland 2006, 2) when its operations were declassified. This 
                        meant that the workers of Bletchley Park could not discuss their contributions with potential 
                        employers (Abbate 2012, 34), contributing to some of the female employees eventually leaving the 
                        field of computing. These forms of social engineering can be useful as a means for information control 
                        but this can also act as a hindrance to individual and technological advancement.
                        </p>
                    </Grid>
                </Grid>
            </Box>

            <Box style={{backgroundColor:"white"}}>
                <Grid container spacing={1} sx={{ backgroundColor: 'white'}}>
                    <Grid item xs={5} >
                        <img src={wrensCropped} style={{ width:'70%', paddingLeft:'10%', paddingTop: '40%'}}/>
                    </Grid>
                    <Grid item xs={7}>
                        <h1 style={{textAlign: 'left', color:'black', paddingRight: '10%', paddingTop: '10%'}}>The Wrens</h1>
                        <p style={{textAlign: 'left', color:'black', paddingRight: '10%', paddingBottom: '20%'}}>
                        Despite the modern perception of the computing field being male dominated, at Bletchley Park the 
                        “first large-scale electronic computer” (Copeland, n.d.c), the Colossus, was actually operated by 
                        women (Abbate 2012, 13). These operators were a part of the Women’s Royal Naval Service and were 
                        given the name Wrens (15). Working long shifts to operate these machines (22), their contributions 
                        would be crucial to the deciphering of over 13,500 enemy messages(16). Despite their contributions, 
                        these women were not treated the same as their male counterparts. They were often regarded as only 
                        capable of performing tasks that required little intellectual ability (28) (Hill 2004, 79). This 
                        perception of their work as being non complex is exemplified through their mandatory military 
                        drills that male workers did not have to complete (Abbate 2012, 22). Because of these gender biases, 
                        the Wrens initial job descriptions were narrow, with males acting as cryptographers and the women 
                        only acting as operators of the machines (26). However, after the operation of the Colossus began, 
                        the Wrens’ roles expanded. They would perform some maintenance on the machines and would sometimes 
                        even utilize them alone to decipher messages (7). The undermining of their abilities also meant that 
                        they would not be able to move up in the hierarchy as promotions were not usually given to the women 
                        of Bletchley Park (Hill 2004, 78). These views on gender would hinder the operations of Bletchley 
                        Park, as shown through George H. Vergine’s, a U.S. Army officer’s statement that the “stereotyped 
                        assumptions about skill had delayed making full use of the Wrens’ talents'' (Abbate 2012, 28). 
                        Despite this discrimation, these women showed that they had the capability for more if given the 
                        opportunity as they became pivotal to the success of the Colossus. <br />  <br />
                        Due to the secrecy that was enforced, the Wrens’ contributions to decoding at Bletchley Park would 
                        remain hidden even years after its closure in 1946 (Grey 2012, 278). The Wrens’ inability to discuss 
                        their work at Bletchley Park would affect their future employment opportunities (Abbate 2012, 34). 
                        Coupled with the pressure to conform to the gender norms of that time to marry and have children, 
                        the closure of Bletchley park meant that many of these women left the field of computing (34-36). 
                        Despite their success while working on the Colossus, it is impossible to know what else the Wrens 
                        could have been capable of had there not been barriers to entry. The use of gender to assign labels 
                        to specific occupations, limits the options for those that are interested in the field of computing. 

                        </p>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Workers;