import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { getGroups } from "../services/GroupsService";
import { Link } from "react-router-dom";
import img1 from '../assets/arugam.jpg'
import img2 from '../assets/dalada.jpg'
import img3 from '../assets/jaffna.jpg'
import img from '../assets/customer2.jpg'
import "../styles/Modal.css";

const Groups = () => {
    
    // Display Groups
    const [groups, setGroups] = useState([]);

    const init = () => {
        getGroups()
        .then(response => {
          console.log('Printing employees data', response.data);
          setGroups(response.data);
        })
        .catch(error => {
          console.log('Something went wrong', error);
        }) 
    }
    
    useEffect(() => {
      init();
    }, []);

    // Create-group Modal
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return ( 
        
        <section class="text-gray-600 body-font mb-10">

            <div>  
                { groups.map(group => (
                <div> key={group.id}
                    <div>{group.name}</div>
        
                </div>
                )) }
            </div>

            <div class="container px-5 py-5 mx-auto">
                <div class="w-full mb-8">
                    <div class="text-xl font-normal title-font mb-4 text-gray-900"></div>
                    <button onClick={toggleModal} class="m-0 px-3 py-1 bg-emerald-300 focus:outline-none border-transparent text-lg font-normal">
                        <div class="pl-1">Create Group</div>
                    </button> 
                    {modal && (
                        <div className="modal">
                           <div onClick={toggleModal} className="overlay"></div>
                           <div className="modal-content">
                                <div className='mb-4 text-xl'>Create new Group</div>
                                <form>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { mb: 2, width: '100%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                <TextField id="filled-basic" label="Name" variant="filled"/>
                                </Box>
                                <div class="mb-4 text-slate-500">Add friends</div>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { mb: 2, width: '100%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                <TextField id="outlined-basic" label="Email" variant="outlined"/>
                                </Box>
                                 <div class="mb-2 text-slate-500">People with access</div>
                                 <div class="h-24 overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                                    <div class="modal-added">
                                       <div class='modal-added-names'>
                                          <div><img src={img} class="h-10 w-10 rounded-full" alt="" /></div>
                                          <div className='ml-3'>Abdul Qadir</div>
                                       </div>
                                       <div className='mr-5 text-slate-500'>Owner</div>
                                    </div>
                                    
                                 </div>
                                 <button className="float-right m-0 px-4 py-1 bg-emerald-300 focus:outline-none border-transparent text-lg font-normal" onClick={toggleModal}>Done</button>
                              </form>
                           </div>
                        </div> 
                    )}
                </div>
                <div class="flex flex-wrap -m-2">
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <Link to="/groupChat" class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-emerald-100 hover:border-transparent">
                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={img1}/>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 title-font font-medium">Holden Caulfield</h2>
                                <p class="text-gray-500">UI Designer</p>
                            </div>
                        </Link>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-emerald-100 hover:border-transparent">
                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={img2}/>
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium">Henry Letham</h2>
                            <p class="text-gray-500">CTO</p>
                        </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-emerald-100 hover:border-transparent">
                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={img3}/>
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium">Oskar Blinde</h2>
                            <p class="text-gray-500">Founder</p>
                        </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-emerald-100 hover:border-transparent">
                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={img2}/>
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium">John Doe</h2>
                            <p class="text-gray-500">DevOps</p>
                        </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-emerald-100 hover:border-transparent">
                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={img1}/>
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium">Martin Eden</h2>
                            <p class="text-gray-500">Software Engineer</p>
                        </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-gray-100 hover:border-transparent">
                        <div class="w-16 h-16 bg-gray-200 object-cover object-center flex-shrink-0 rounded-full mr-4"></div>
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-normal">No Groups Created</h2>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Groups;