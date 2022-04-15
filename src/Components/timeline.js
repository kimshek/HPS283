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
            <p style={{textAlign: 'left', color:'black', paddingLeft: '2%'}}>Overview of the different 
            inventions and events at Bletchley Park as well as some the events in the future that they 
            impacted
            </p>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(00, 00, 00)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(00, 00, 00)' }}
                    date="1938"
                    iconStyle={{ background: 'rgb(00, 00, 00)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Creation of Bletchley Park</h3>
                    <h4 className="vertical-timeline-element-subtitle">1938</h4>
                    <p> The land and house in which Bletchley Park was situated was purchased in 1938 
                    by the Secret Intelligence Service to provide a place for the Government Code and 
                    Cypher School to work in case a war started [7, p33]. Staff started moving to the 
                    site in 1939 [7, p274]
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="1939"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Official Secrets Act</h3>
                    <h4 className="vertical-timeline-element-subtitle">1939</h4>
                    <p> Staff were expected to sign the Official Secrets Act [8, pg 92]. This would 
                    prevent people from speaking of the work being done at Bletchley Park with anyone 
                    not involved in the work [9, intro].
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="1940"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Bombe</h3>
                    <h4 className="vertical-timeline-element-subtitle">1940</h4>
                    <p> Machine used to decrypt the German Enigma and provide the Allies with intel on 
                    the Nazi’s radio communications [2]
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="1944"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Colossus</h3>
                    <h4 className="vertical-timeline-element-subtitle">1944</h4>
                    <p> Colossus Mark 1 became operational in 1944 and began decoding the Tunny encrypted 
                    messages. [7, p277]
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="1948"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Manchester Baby</h3>
                    <h4 className="vertical-timeline-element-subtitle">1948</h4>
                    <p> Proof of concept computer that is considered the first “digital electronic stored 
                    program computer” [5].
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="1950"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Turing Test</h3>
                    <h4 className="vertical-timeline-element-subtitle">England</h4>
                    <p>
                    Description
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="1970s"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Information Declassified</h3>
                    <h4 className="vertical-timeline-element-subtitle">1970s</h4>
                    <p> The British government started easing the secrecy of the work done in Bletchley 
                    Park. 
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>

            <p style={{textAlign: 'left', color:'black', paddingLeft: '2%', paddingBottom: '5%'}}> 
            </p>
        </div>
    )
}

export default Timeline;