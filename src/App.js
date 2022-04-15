// Tabs styling from https://codepen.io/c0deninjad976da24ae/pen/YVVyxz
import './App.css';
import React from 'react';
// import TabPanel from './Components/tabPanel';
import Timeline from './Components/timeline';
import bletchleyPark from './Pictures/bletchleyPark.jpg';

// import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from './Components/header';
import Loading from './Components/loading';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

import Home from './Components/home'
import Workers from './Components/workers'



class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Loading />} />
            <Route path="workers" element={<Workers />} />
            {/* <Route path="/" element={<Loading />} /> */}
          </Routes>
          {/* <Loading/> */}
        </Router>
        {/* <Loading/> */}
      </div>
    );
  }
}

export default App;
