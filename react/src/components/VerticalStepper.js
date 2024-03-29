import React from 'react'

import { FaMoneyBillWave } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const VerticalStepper = () => {
  return (
    <div>
        <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-emerald-500 tracking-widest font-medium title-font mb-1">SO YOU MAY WONDERING HOW TO WORK WITH THE SYSTEM</h2>
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
                <h3 className="vertical-timeline-element-title">Form a Group</h3>
                
                <p>
                Form a group with your members who are registered with our system
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(80, 200, 120)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(80, 200, 120)' }}
                
                iconStyle={{ background: 'rgb(80, 200, 120)', color: '#fff' }}
                icon={<FaRocketchat />}
            >
                <h3 className="vertical-timeline-element-title">Chat</h3>
                <p>
                Chat with your teammates of your trip inorder to make decisions
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(80, 200, 120)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(80, 200, 120)' }}
                
                iconStyle={{ background: 'rgb(80, 200, 120)', color: '#fff' }}
                icon={<FaSearchLocation />}
            >
                <h3 className="vertical-timeline-element-title">Live Location</h3>
                <p>
                Share your live locations among your teammates in case of emergency 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(80, 200, 120)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(80, 200, 120)' }}
                
                iconStyle={{ background: 'rgb(80, 200, 120)', color: '#fff' }}
                icon={<FaMoneyBillWave />}
            >
                <h3 className="vertical-timeline-element-title">Budget</h3>
                <p>
                Set the budget of your trip and share it among your friends, so you will assure about your pay
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        
    </div>
  )
}

export default VerticalStepper