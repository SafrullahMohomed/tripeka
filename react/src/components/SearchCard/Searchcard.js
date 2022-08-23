import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { format } from 'date-fns';
import { faMagnifyingGlass, faPerson } from '@fortawesome/free-solid-svg-icons'
import '../Test.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Searchcard = () => {
 const [openDate,setOpenDate]=useState(false);
 const [destination,setDestination]=useState("");
 const depthLevel = -5;
  const [date,setDate] =  useState([ {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }
]);

    const [openOptions,setopenOptions]=useState(false);
    const [options,setOptions]=useState({
      adult:1,
      children:0,
      room :1,
    });


    const handleOption =(name,operation)=>{
      setOptions((prev)=>{
        return{
        ...prev,
        [name]: operation==="i" ? options[name] + 1 : options[name] -1,
      };
      });
    }
    const navigate =useNavigate()


    const handleSearch =()=>{
   navigate("./List",{state:{destination,date,options}});
   }
  //  const url="";
  //  const picture =new URL("../assets/hotelbook.jpg",import.meta.url)

    


  return (
  
 <div className="card grid-cols-1">
 <div className="mainContainer max-width h-28 bg-"><h1 className="mainhead justify-center pt-12  pl-16 text-3xl font-bold text-white ">Home</h1></div>
  <div className="Home bg-no-repeat w-full grid grid-cols-2 z-index: 0  z-index:1">
    
    

      <div className="listcontainer  grid-cols-5 ml-8  items-center mt-20px w-full max-w-xl " >
        <div className="listwrapper   gap-20  max-w-[512px] mb-4 bg- z-index: 10 mt-16 ml-8">
          <div className="listSearch  bg-white rounded-lg shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
            <h1 className="listTitle text-sm mb-2 antialiased font-bold text-4xl ml-2 font-poppins text-[#2c8257] ">Pick up the best for Enjoy your stay </h1>
            <div className="Item ml-4 mb-4 ">
            <label className="grid grid-cols-1 font-poppins text-gray-400">Destination</label>
            <input className= "shadow max-w-[256px] appearance-none border rounded-lg w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your destination"onChange={e=>setDestination(e.target.value)} ></input>
            </div>

            <div className="Item ml-4 mb-4">
            
     
      
            
            <label className="grid grid-cols-1 font-poppins text-gray-400 mt-16">Set the dates</label>
            <div class="grid-cols-2 cursor-pointer font-poppins text-gray-700 ">
                                        <div className="calender text-lg  font-medium  text-gray-400 font-poppins z-index: 50" >
                                      <span> <FontAwesomeIcon icon  ={ faCalendar} />
                                      
                                      <span onClick={()=>setOpenDate(!openDate)}class="ml-2 ">{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>

                                        </span>
                                          </div>
             <div className="mt-4  absolute">                        
                       {openDate && <DateRange editableDateInputs={true}
                       depthLevel={depthLevel}
                        onChange={item=>setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}   
                        className="date "
                        />  }            

                        </div>
                
            </div>
           
            
            

          <div className="Item mt-16 font-poppins text-gray-400  z-index: 40 cursor-pointer">
          <FontAwesomeIcon icon={faPerson} className="itemicon"/>
          <span onClick={()=>setopenOptions(!openOptions)} className="itemtext m-4 ml-2" >{`   ${options.adult}  Adult    ${options.children}  Children    ${options.room}  Room`}</ span>
          {openOptions &&<div className="options ml-4  ">
            <div className="optionsitem font-poppins text-gray-600">
           
              <span className="optionsText mt-4 text-m ">Adult</span>
              <div className="optionsCounter mt-4">
              <button className="optionsCounterbutton border-none" disabled={options.adult <=1}onClick={()=>handleOption("adult","d")}>-</button>
              <span className="optionsCounternumber">{options.adult}</span>
              <button className="optionsCounterbutton text-lg border-none" onClick={()=>handleOption("adult","i")}>+</button>
              </div>
          </div>
          <div className="optionsitem">
          
              <span className="optionsText font-poppins text-gray-600">Children</span>
              <div className="optionsCounter">
              <button className="optionsCounterbutton text-lg border-none" disabled={options.children <=0} onClick={()=>handleOption("children","d")}>-</button>
              <span className="optionsCounternumber">{options.children}</span>
              <button className="optionsCounterbutton text-lg border-none" onClick={()=>handleOption("children","i")}>+</button>
              </div>
          </div>

          <div className="optionsitem">
              <span className="optionsText  font-poppins text-gray-600" >Room</span>
              <div className="optionsCounter mb-4 ">
              <button className="optionsCounterbutton text-lg border-none"disabled={options.room <=1} onClick={()=>handleOption("room","d")}>-</button>
              <span className="optionsCounternumber">{options.room}</span>
              <button className="optionsCounterbutton text-lg border-none" onClick={()=>handleOption("room","i")}>+</button>
              </div>
          </div>
        </div>}
        </div>


        
            
        <button class=" mt-4 border-none bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded-2 inline-flex items-center" OnClick={handleSearch}>
           
            <span><FontAwesomeIcon icon  ={ faMagnifyingGlass} /> Search </span>
             </button>

          

           
            <div className="listresults "></div>
            </div>

          </div>

        </div>
      </div>
     

    
    
     
       <div class="img ">
       
    </div>
   

    
   
    </div>
    

 </div>

 
 

 
/*<div class="absolute grid top-0 w-full b-full flex mx-32 mt-64 grid-cols-2">
    <div class="grid grid-cols-2">  <h1><div class="text-6xl  "> </div> </h1>
      
        </div>
        <div className= "  break-normal  top-0 w-full b-full flex mx-0 mt-32"><p></p></div>
        </div>*/


  )

}

export default Searchcard;