// timeline from https://www.npmjs.com/package/react-vertical-timeline-component

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline(props) {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(00, 00, 00)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(00, 00, 00)' }}
                date="1938"
                iconStyle={{ background: 'rgb(00, 00, 00)', color: '#fff' }}
                
            >
                <h3 className="vertical-timeline-element-title">Creation of Bletchley Park</h3>
                <h4 className="vertical-timeline-element-subtitle">England, United Kingdom</h4>
                <p>
                The land on which Bletchley Park was situated on 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="1939"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                
            >
                <h3 className="vertical-timeline-element-title">Official Secrets Act 1939</h3>
                <h4 className="vertical-timeline-element-subtitle">United Kingdom</h4>
                <p>
                Description
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
                <h4 className="vertical-timeline-element-subtitle">England, United Kingdom</h4>
                <p>
                Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="1944"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                
            >
                <h3 className="vertical-timeline-element-title">Colossus</h3>
                <h4 className="vertical-timeline-element-subtitle">England, United Kingdom</h4>
                <p>
                Description
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
                <h4 className="vertical-timeline-element-subtitle">Manchester, England</h4>
                <p>
                Description
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
                <h4 className="vertical-timeline-element-subtitle">England</h4>
                <p>
                Description
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

export default Timeline;