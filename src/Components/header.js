// from https://mui.com/components/tabs/
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../Style/style.css'
import Timeline from './timeline';
import WorkCited from './workCited';
import Workers from './workers';
import AlanTuring from './alanTuring';
import MaxNewman from './maxNewman';
import Home from './home';
import bletchleyPark from '../Pictures/bletchleyPark.jpg';
import wrens from '../Pictures/WrensModified.jpg';
import maxNewman from '../Pictures/maxNewman.jpg';
import alanTuring from '../Pictures/alanTuring.jpg';


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
    <Box sx={{ width: '100%', backgroundColor: 'white'}}>
      <Grid container sx={{ backgroundColor: 'black', height: '50px'}}>
        <Grid item xs={2} >
          <Grid container style={{paddingLeft: '10%'}}>
            <p style={{color:'white',fontWeight: "bold", fontSize:'14pt'}}> Bletchley Park </p>
          </Grid>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ borderColor: 'divider', backgroundColor: 'black', width: '100%', height: '48px'}}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs" sx={{ float:'right'}} value={value} >
              <Tab onClick={() =>setValue(0)} label={<span style={{ color: 'white' }}>Home</span>} {...a11yProps(0)} />
              <Tab onClick={() =>setValue(1)} label={<span style={{ color: 'white' }}>Timeline</span>} {...a11yProps(1)} />
              <Tab onClick={() =>setValue(2)} label={<span style={{ color: 'white' }}>Workers</span>} {...a11yProps(2)} />
              <Tab onClick={() =>setValue(3)} label={<span style={{ color: 'white' }}>Alan Turing</span>} {...a11yProps(3)} />
              <Tab onClick={() =>setValue(4)} label={<span style={{ color: 'white' }}>Max Newman</span>} {...a11yProps(4)} />
            </Tabs>
          </Box>
        </Grid>
      </Grid>
      
      <TabPanel value={value} index={0}>
        <Home/>
        <Box style={{backgroundColor:"black"}}>
                <Grid container spacing={1} sx={{ backgroundColor: 'black'}}>
                    <Grid item xs={5} >
                        <img src={wrens} style={{width:'80%', paddingLeft:'20%', paddingTop: '20%', paddingBottom: '10%'}}/>
                    </Grid>
                    <Grid item xs={7}>
                        <h1 onClick={() =>setValue(2)} style={{textAlign: 'left', color:'white', paddingLeft: "10%", paddingTop: '15%'}}> The Workers </h1>
                        <p style={{textAlign: 'left', color:'white', paddingLeft: "10%"}}>Those who worked included the Wrens</p>
                    </Grid>
                </Grid>
            </Box>
            <Box style={{backgroundColor:"black"}}>
                <Grid container spacing={1} sx={{ backgroundColor: 'black'}}>
                    <Grid item xs={7}>
                        <h1 onClick={() =>setValue(3)} style={{textAlign: 'right', color:'white', paddingRight: "10%", paddingTop: '15%'}}> Alan Turing </h1>
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
                        <h1 onClick={() =>setValue(4)} style={{textAlign: 'left', color:'white', paddingLeft: "10%", paddingTop: '15%'}}> Max Newman </h1>
                        <p style={{textAlign: 'left', color:'white', paddingLeft: "10%"}}>Those who worked included the Wrens</p>
                    </Grid>
                </Grid>
            </Box>

        
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1 style={{textAlign: 'center', color:'black', paddingLeft: "2%"}}> Timeline of Major Events </h1>
        <Timeline/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Workers/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h1 style={{textAlign: 'left', color:'black', paddingLeft: "2%"}}> Alan Turing</h1>
        <AlanTuring/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <h1 style={{textAlign: 'left', color:'black', paddingLeft: "2%"}}> Max Newman</h1>
        <MaxNewman/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <h1 style={{textAlign: 'left', color:'black', paddingLeft: "2%"}}> Work Cited</h1>
        <WorkCited/>
      </TabPanel>
    </Box>
    <div style={{position:'fixed', bottom: '0',left:'0', right:'0'}}> 
      <Grid container spacing={1} sx={{ backgroundColor: 'black', height: '56px'}}>
        <Grid item xs={2} >
          <Grid container justifyContent="center">
          </Grid>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ borderColor: 'divider', backgroundColor: 'black', width: '100%', height: '48px'}}>
            <Tabs value={value} aria-label="basic tabs" sx={{ float:'right'}} value={value} >
              <Tab onClick={() =>setValue(0)} label={<span style={{ color: 'white' }}>Home</span>} {...a11yProps(0)} />
              <Tab onClick={() =>setValue(5)} label={<span style={{ color: 'white' }}>Work Cited</span>} {...a11yProps(5)} />
            </Tabs>
          </Box>
        </Grid>
      </Grid>
    </div>
  </div>

  );
}