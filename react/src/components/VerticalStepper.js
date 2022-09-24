import React from 'react'

import { FaHeart } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const VerticalStepper = () => {
  return (
    <div>
        <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-emerald-500 tracking-widest font-medium title-font mb-1">SO YOU MAY WONDERING HOW TO WORK WITH THE SYSTEN</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">HERE YOU GO</h1>
        </div>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(80, 200, 120)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(80, 200, 120)' }}
                
                iconStyle={{ background: 'rgb(80, 200, 120)', color: '#fff' }}
                icon={<FaPeopleArrows />}
                
                
            >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(80, 200, 120)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(80, 200, 120)' }}
                
                iconStyle={{ background: 'rgb(80, 200, 120)', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(80, 200, 120)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(80, 200, 120)' }}
                
                iconStyle={{ background: 'rgb(80, 200, 120)', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(80, 200, 120)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  emerald-500' }}
                
                iconStyle={{ background: 'rgb(80, 200, 120)', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        
    </div>
  )
}

export default VerticalStepper