import React from 'react';


//Fullcalendar and Realted Plugins
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class EventCalendar extends React.Component {
  
    render() {
      return (
        
        
  <div className="maincontainer">

        <Navbar/>
        <br></br>
        <br/>
        <br/>
        <br/>
        <FullCalendar 
          plugins={[ dayGridPlugin, interactionPlugin ]}
          initialView="dayGridMonth"
          
          eventClick={
            function(arg){
              alert(arg.event.title)
              alert(arg.event.start)
            }
          }
          events={[
            { title: 'National Day' ,date: '2022-02-04' },
            { title: "Valentine's Day" ,date: '2022-02-14' },
            { title: "Mahasivarathri Day" ,date: '2022-03-01' },
            
            { title: 'event 2', date: '2022-08-28' }
          ]}
        />
        <br/>

    <Footer/>
  </div>
  
  )
  };
  }
  export default EventCalendar;