// timeline from https://www.npmjs.com/package/react-vertical-timeline-component

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import React, { useState, useEffect } from 'react';
import 'react-vertical-timeline-component/style.min.css';

function Timeline(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <p style={{textAlign: 'center', color:'black', paddingLeft: '2%'}}>An overview of the different 
            inventions and milestones of Bletchley Park as well as some of the future events that they 
            impacted.
            </p>
            <VerticalTimeline
                lineColor = 'black'
            >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(00, 00, 00)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(00, 00, 00)' }}
                    date= "1938"
                    dateClassName='dateBlack'
                    iconStyle={{ background: 'rgb(00, 00, 00)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title" >Creation of Bletchley Park</h3>
                    <h4 className="vertical-timeline-element-subtitle" >1938</h4>
                    <p> The land and house in which Bletchley Park was situated was purchased in 1938 by the Secret Intelligence Service to provide a place for the Government Code and Cypher School to work in case a war started (Grey 2012, 33). Staff started moving to the site in 1939 (Grey 2012, 274).
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(00, 00, 00)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(00, 00, 00)' }}
                    date= "1939"
                    dateClassName='dateBlack'
                    iconStyle={{ background: 'rgb(00, 00, 00)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Official Secrets Act</h3>
                    <h4 className="vertical-timeline-element-subtitle">1939</h4>
                    <p> Staff were expected to sign the Official Secrets Act (Smith 2017, 92). 
                        This would prevent employees from speaking of the work being 
                        done at Bletchley Park with outsiders (Abbate 2012, 36).

                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(00, 00, 00)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(00, 00, 00)' }}
                    date= "1940"
                    dateClassName='dateBlack'
                    iconStyle={{ background: 'rgb(00, 00, 00)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Bombe</h3>
                    <h4 className="vertical-timeline-element-subtitle">1940</h4>
                    <p> The Bombe was a machine used to decrypt the German Enigma 
                        and provide the Allies with intel on the Nazi’s communications (Copeland, n.d.a).
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(00, 00, 00)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(00, 00, 00)' }}
                    date= "1944"
                    dateClassName='dateBlack'
                    iconStyle={{ background: 'rgb(00, 00, 00)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Colossus</h3>
                    <h4 className="vertical-timeline-element-subtitle">1944</h4>
                    <p> Colossus Mark 1 became operational in 1944 and began decoding the Tunny encrypted messages (Grey 2012, 277).
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(00, 00, 00)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(00, 00, 00)' }}
                    date= "1946"
                    dateClassName='dateBlack'
                    iconStyle={{ background: 'rgb(00, 00, 00)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Closure of Bletchley Park</h3>
                    <h4 className="vertical-timeline-element-subtitle">1946</h4>
                    <p> In 1946, wartime codebreaking operations at Bletchley Park ceased (Grey 2012, 278).
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(00, 00, 00)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(00, 00, 00)' }}
                    date= "1948"
                    dateClassName='dateBlack'
                    iconStyle={{ background: 'rgb(00, 00, 00)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Manchester Baby</h3>
                    <h4 className="vertical-timeline-element-subtitle">1948</h4>
                    <p> The Manchester Baby was a proof of concept computer that was 
                        considered to be the first “digital electronic stored program computer” (Anderson 2013).
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(00, 00, 00)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(00, 00, 00)' }}
                    date= "1950"
                    dateClassName='dateBlack'
                    iconStyle={{ background: 'rgb(00, 00, 00)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Turing Test</h3>
                    <h4 className="vertical-timeline-element-subtitle">1950</h4>
                    <p>
                    The Turing Test was developed by Alan Turing to see whether a computer 
                    was intelligent and could think for itself. To this day, no machine has 
                    passed this test (Copeland, n.d.b).
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(00, 00, 00)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(00, 00, 00)' }}
                    date= "1970s"
                    dateClassName='dateBlack'
                    iconStyle={{ background: 'rgb(00, 00, 00)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Information Declassified</h3>
                    <h4 className="vertical-timeline-element-subtitle">1970s</h4>
                    <p> In the 1970s, the British government started easing the secrecy of the work done in Bletchley Park (Copeland 2006, 2).
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>

            <p style={{textAlign: 'left', color:'black', paddingLeft: '2%', paddingBottom: '5%'}}> 
            </p>
        </div>
    )
}

export default Timeline;