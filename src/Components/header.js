// from https://mui.com/components/tabs/
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import bletchleyPark from '../Pictures/bletchleyPark.jpg';
import Grid from '@mui/material/Grid';
import Timeline from './timeline';
import WorkCited from './workCited';
import Workers from './workers';
import AlanTuring from './alanTuring';
import MaxNewman from './maxNewman';


console.log(bletchleyPark)

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
        <Box sx={{ p: 3 }}>
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
    <Box sx={{ width: '100%', backgroundColor: 'white'}}>
      <Grid container spacing={1} sx={{ backgroundColor: 'white', height: '56px'}}>
        <Grid item xs={4}>
          <h2> Bletchley Park </h2>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ borderColor: 'divider', backgroundColor: 'white', width: '100%', height: '48px'}}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ float:'right'}}>
              <Tab label="Home" {...a11yProps(0)} />
              <Tab label="Timeline" {...a11yProps(1)} />
              <Tab label="Workers" {...a11yProps(2)} />
              <Tab label="Alan Turing" {...a11yProps(3)} />
              <Tab label="Max Newman" {...a11yProps(4)} />
              <Tab label="Work Cited" {...a11yProps(5)} />
            </Tabs>
          </Box>
        </Grid>
      </Grid>
      
      <TabPanel value={value} index={0}>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
          <h1>Bletchley Park</h1>
        </div>
        
        <img src={bletchleyPark}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1>Timeline of Major Events</h1>
        <Timeline/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Workers/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h1>Alan Turing</h1>
        <AlanTuring/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <h1>Max Newman</h1>
        <MaxNewman/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <h1>Work Cited</h1>
        <WorkCited/>
      </TabPanel>
    </Box>
  );
}