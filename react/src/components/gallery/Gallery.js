import React from "react"
import Cards from "./Cards"
import "./Gallery.css"
import GalleryData from "./GalleryData"


const Gallery = () => {
  return (
    <>

      
      <section className='gallery top'>
     
        <div className="head text-sm mb-2 antialiased font-bold text-4xl  font-poppins text-[#2c8257] ml-8 mt-16 ">Most Popular Hotels</div>
        <div className='container ml-4 grid grid-cols-3'>
        
          {GalleryData.map((value) => {
            return <Cards imgaes={value.img} title={value.title} />
          })}
        </div>
      </section>
    </>
  )
}

export default Gallery
