import React, { useState, useEffect } from "react";
import { getSuggestions } from "../services/SuggestionService";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Search from "./Search";


const itemData = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
    description: "Galle is a city on the southwest coast of Sri Lanka. It’s known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century.",
  },
  { 
    id: 2,
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
    description: "Galle is a city on the southwest coast of Sri Lanka. It’s known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century.",
  },
  { 
    id: 3,
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
    description: "Galle is a city on the southwest coast of Sri Lanka. It’s known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century.",
  },
  { 
    id: 4,
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
    description: "Galle is a city on the southwest coast of Sri Lanka. It’s known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century.",
  },
  { 
    id: 5,
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
    description: "Galle is a city on the southwest coast of Sri Lanka. It’s known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century.",
  },
  { 
    id: 6,
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
    description: "Galle is a city on the southwest coast of Sri Lanka. It’s known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century.",
  },
  { 
    id: 7,
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
    description: "Galle is a city on the southwest coast of Sri Lanka. It’s known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century.",
  },
  { 
    id: 8,
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
    description: "Galle is a city on the southwest coast of Sri Lanka. It’s known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century.",
  },
  { 
    id: 9,
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
    description: "Galle is a city on the southwest coast of Sri Lanka. It’s known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century.",
  },
  { 
    id: 10,
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
    description: "Galle is a city on the southwest coast of Sri Lanka. It’s known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century.",
  },
  
];

const Suggestions = () => {

  const [suggestions, setSuggestions] = useState([]);

  const init = async () => {
    
    getSuggestions()
      .then((response) => {
        // console.log("Printing data", response.data);
        setSuggestions(response.data.sort(() => Math.random() - 0.5))
        // setIsPending(false);
        // setError(null);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
        // setIsPending(false);
        // setError(err.message);
    });

    // const data = await fetch(
    //     `https://api.unsplash.com/search/photos?page=1&query=${id}&client_id=9WMuH_JWZbfr3mw43CYqFVoe87rAXLKaS2iCp6ibnz0`
    // );
    // const dataJ = await data.json();
    // const result = await dataJ.results;
    // const image1 = await result[0].urls.raw;
    // const image2 = await result[1].urls.raw;
    // const image3 = await result[2].urls.raw;
    // const image4 = await result[3].urls.raw;
  };

  useEffect(() => {
    console.log("Run")
    init();
  }, []);

  return ( 
    <>
    {/* <Search /> */}
    <section class="text-gray-600 body-font pt-8 bg-gray-100">
      {/* {suggestions.map((suggestion) => (
            <div>{suggestion.location}</div>
      ))} */}
    <div class="container px-5 py-10 mx-auto">
      <div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Best Places to Visit</h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">These are our best suggestions for you to travel around the country!</p>
      </div>
      <div class="flex flex-wrap justify-center -m-4">
        <Box sx={{ width: 1000 }}>
          <ImageList variant="masonry" cols={3} gap={6}>
            {suggestions.map((item, index) => index < 10 && (
              <ImageListItem>
                <img
                  src={`${item.url}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.location}
                  subtitle={item.description}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.location}`}
                    >
                      <InfoIcon 
                        onClick = {() => {window.location.href = `/suggestion/${item.location}`}}
                      />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
              
      </div>
    </div>
  </section>
  </>
  );
}
 
export default Suggestions;