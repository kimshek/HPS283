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
      <Grid container spacing={1} sx={{ backgroundColor: 'black', height: '56px'}}>
        <Grid item xs={2} >
          <Grid container justifyContent="center">
            <p style={{color:'white'}}> Bletchley Park </p>
          </Grid>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ borderColor: 'divider', backgroundColor: 'black', width: '100%', height: '48px'}}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs" sx={{ float:'right'}} >
              <Tab label={<span style={{ color: 'white' }}>Home</span>} {...a11yProps(0)} />
              <Tab label={<span style={{ color: 'white' }}>Timeline</span>} {...a11yProps(1)} />
              <Tab label={<span style={{ color: 'white' }}>Workers</span>} {...a11yProps(2)} />
              <Tab label={<span style={{ color: 'white' }}>Alan Turing</span>} {...a11yProps(3)} />
              <Tab label={<span style={{ color: 'white' }}>Max Newman</span>} {...a11yProps(4)} />
              <Tab label={<span style={{ color: 'white' }}>Work Cited</span>} {...a11yProps(5)} />
            </Tabs>
          </Box>
        </Grid>
      </Grid>
      
      <TabPanel value={value} index={0}>
      {/* <Box sx={{ borderColor: 'divider', backgroundColor: 'black', width: '100%', height: '48px'}}> */}
            
          {/* </Box> */}
        <Home/>
        {/* <Tabs value={value} onChange={handleChange} aria-label="basic tabs" sx={{ float:'right'}} >
          
              <Tab label={<span style={{ color: 'black' }}>Timeline</span>} {...a11yProps(2)} />
              <Tab label={<span style={{ color: 'black' }}>Workers</span>} {...a11yProps(3)} />

            </Tabs> */}
        {/* <br />
        <br />
        <br />
        <br /> */}
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1 style={{textAlign: 'left', color:'black', paddingLeft: "2%"}}> Timeline of Major Events </h1>
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
            {/* <p style={{color:'white'}}> Bletchley Park </p> */}
          </Grid>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ borderColor: 'divider', backgroundColor: 'black', width: '100%', height: '48px'}}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs" sx={{ float:'right'}} >
              <Tab label={<span style={{ color: 'white' }}>Home</span>} {...a11yProps(0)} />
              <Tab label={<span style={{ color: 'white' }}>Timeline</span>} {...a11yProps(1)} />
              <Tab label={<span style={{ color: 'white' }}>Workers</span>} {...a11yProps(2)} />
              <Tab label={<span style={{ color: 'white' }}>Alan Turing</span>} {...a11yProps(3)} />
              <Tab label={<span style={{ color: 'white' }}>Max Newman</span>} {...a11yProps(4)} />
              <Tab label={<span style={{ color: 'white' }}>Work Cited</span>} {...a11yProps(5)} />
            </Tabs>
          </Box>
        </Grid>
      </Grid>
    </div>
  </div>

  );
}