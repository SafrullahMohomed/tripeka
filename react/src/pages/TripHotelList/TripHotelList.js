import React from 'react'

const TripHotelList = () => {
  return (
    <div style={{width: "100%", maxWidth: "1024px", display: "flex",justifyContent: "space-between",gap: "20px"}}>
      <div style={{flex:"1",borderRadius: "10px",overflow: "hidden",cursor: "pointer"}}>
        <img
          src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
          alt=""
          style={{width: "100%",height: "150px",objectFit: "cover"}}
        />
        <div className="pListTitles">
          <h1 class='text-lg' style={{color:"#444"}}>Kingsbary Hotel</h1>
          <h2>5 star</h2>
        </div>
      </div>
      <div style={{flex:"1",borderRadius: "10px",overflow: "hidden",cursor: "pointer"}}>
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
          alt=""
          style={{width: "100%",height: "150px",objectFit: "cover"}}
        />
        <div className="pListTitles">
          <h1 class='text-lg' style={{color:"#444"}}>Ramada Hotel</h1>
          <h2>5 star</h2>
        </div>
      </div>
      <div style={{flex:"1",borderRadius: "10px",overflow: "hidden",cursor: "pointer"}}>
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
          alt=""
          style={{width: "100%",height: "150px",objectFit: "cover"}}
        />
        <div className="pListTitles">
          <h1 class='text-lg' style={{color:"#444"}}>Sangri-La Hotel</h1>
          <h2>4 star</h2>
        </div>
      </div>
      <div style={{flex:"1",borderRadius: "10px",overflow: "hidden",cursor: "pointer"}}>
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
          alt=""
          style={{width: "100%",height: "150px",objectFit: "cover"}}
        />
        <div className="pListTitles">
          <h1 class='text-lg' style={{color:"#444"}}>Taj Samudra Hotel</h1>
          <h2>3 star</h2>
        </div>
      </div>
      <div style={{flex:"1",borderRadius: "10px",overflow: "hidden",cursor: "pointer"}}>
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
          alt=""
          style={{width: "100%",height: "150px",objectFit: "cover"}}
        />
        <div className="pListTitles">
          <h1 class='text-lg' style={{color:"#444"}}>Cinnamon Grand Hotel</h1>
          <h2>4 star</h2>
        </div>
      </div>
    </div>
  )
}

export default TripHotelList