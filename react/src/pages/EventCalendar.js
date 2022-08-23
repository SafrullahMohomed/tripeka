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
        <div className='p-32 mb-3'>
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
              { title: 'Duruthu Full Moon Poya Day' ,date: '2022-01-17' },
              { title: "Tamil Thai Pongal Day" ,date: '2022-01-14' },
              { title: 'National Day' ,date: '2022-02-04' },
              { title: 'Navam Full Moon Poya Day' ,date: '2022-02-16' },
              { title: "Valentine's Day" ,date: '2022-02-14' },
              { title: "Mahasivarathri Day" ,date: '2022-03-01' },
              { title: 'Madin Full moon poya day' ,date: '2022-03-17' },
              { title: 'Bak Full moon poya day' ,date: '2022-04-16' },
              { title: "Good Friday" ,date: '2022-04-15' },
              { title: "Day prior to sinhala & tamil new year" ,date: '2022-04-13' },
              { title: "sinhala & tamil new year" ,date: '2022-04-14' },
              { title: 'May Day' ,date: '2022-05-01' },
              { title: "Eid al-Fitr " ,date: '2022-05-03' },
              { title: "Vesak Full Moon Poya day" ,date: '2022-05-15' },
              { title: "Day following Vesak Full Moon Poya day" ,date: '2022-05-16' },
              { title: "Poson Full Moon" ,date: '2022-06-14' },
              { title: "Eid al-Adha" ,date: '2022-07-10' },
              { title: 'Esala Full Moon' ,date: '2022-07-13' },
              { title: "Nikini full moon poya day" ,date: '2022-08-11' },
              { title: "Milad-Un-Nabi (Holy Prophet's Birthday)" ,date: '2022-10-09' },
              { title: "Binara full moon poya day" ,date: '2022-09-10' },
              { title: "Vap full moon poya day" ,date: '2022-10-09' },
              { title: "Deepavali" ,date: '2023-10-24' },
              { title: "Ill full moon poya day" ,date: '2022-11-07' },
              { title: "Christmas Eve" ,date: '2022-12-24' },
              { title: "Christmas Day" ,date: '2022-12-25' },
              { title: "Unduvap Full moon poya day" ,date: '2022-12-07' },
              { title: 'Duruthu Full Moon Poya Day' ,date: '2023-01-06' },
              { title: "Tamil Thai Pongal Day" ,date: '2023-01-15' },
              { title: 'National Day' ,date: '2023-02-04' },
              { title: "Valentine's Day" ,date: '2023-02-14' },
              { title: "Mahasivarathri Day" ,date: '2023-02-18' },
              { title: 'Madin Full moon poya day' ,date: '2023-03-07' },
              { title: 'Bak Full moon poya day' ,date: '2023-04-05' },
              { title: "Good Friday" ,date: '2023-04-07' },
              { title: "Day prior to sinhala & tamil new year" ,date: '2023-04-13' },
              { title: "sinhala & tamil new year" ,date: '2023-04-14' },
              { title: 'May Day' ,date: '2023-05-01' },
              { title: "Eid al-Fitr " ,date: '2023-04-22' },
              { title: "Vesak Full Moon Poya day" ,date: '2023-05-05' },
              { title: "Day following Vesak Full Moon Poya day" ,date: '2023-05-06' },
              { title: "Poson Full Moon" ,date: '2023-06-03' },
              { title: "Eid al-Adha" ,date: '2023-06-29' },
              { title: 'Esala Full Moon' ,date: '2023-07-03' },
              { title: "Nikini full moob poya day" ,date: '2023-08-01' },
              { title: "Adi Nikini full moob poya day" ,date: '2023-08-30' },
              { title: "Milad-Un-Nabi (Holy Prophet's Birthday)" ,date: '2022-09-28' },
              { title: "Binara full moon poya day" ,date: '2023-09-28' },
              { title: "Vap full moon poya day" ,date: '2023-10-28' },
              { title: "Deepavali" ,date: '2023-09-28' },
              { title: "Ill full moon poya day" ,date: '2023-11-26' },
              { title: "Christmas Eve" ,date: '2023-12-24' },
              { title: "Christmas Day" ,date: '2023-12-25' },

            ]}
          />
        </div>
      <Footer/>
    </div>
  )};
}

export default EventCalendar;