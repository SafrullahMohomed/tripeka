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
            { title: 'March Equinox' ,date: '2022-03-20' },
            { title: "Good Friday" ,date: '2022-04-15' },
            { title: "Easter Sunday" ,date: '2022-04-17' },
            { title: 'May Day' ,date: '2022-05-01' },
            { title: "Eid al-Fitr " ,date: '2022-05-03' },
            { title: "Mother's Day" ,date: '2022-05-08' },
            { title: "Father's Day" ,date: '2022-06-19' },
            { title: "June Solstice" ,date: '2022-06-21' },
            { title: "Eid al-Adha" ,date: '2022-07-10' },
            { title: 'Raksha Bandhan' ,date: '2022-08-11' },
            { title: "Ganesh Chaturthi" ,date: '2022-08-31' },
            { title: "September Equinox" ,date: '2022-09-23' },
            { title: 'Dussehra' ,date: '2022-10-05' },
            { title: "Milad-Un-Nabi (Holy Prophet's Birthday)" ,date: '2022-10-08' },
            { title: "December Solstice" ,date: '2022-12-22' },
            { title: "Christmas Eve" ,date: '2022-12-24' },
            { title: "Christmas Day" ,date: '2022-12-25' }
          ]}
        />
        <br/>

    <Footer/>
  </div>
  
  )
  };
  }
  export default EventCalendar;