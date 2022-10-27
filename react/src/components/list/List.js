import './List.css'
import { useState } from 'react';
import {useLocation} from 'react-router-dom';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import SearchItem from "../../components/SearchItem/SearchItem";


const List =()=>{

  
    return(
       
     <div>
    
       <div className="listContainer">
        <div className="listWrapper">
          <div className="lSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              
             
            </div>
            
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    
  );
};

export default List;