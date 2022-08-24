import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserListUser from "./UserListUser";

const UserList = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          slidesToShow: 5,
        },
      },

      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 4

        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3
        },
      },

      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        },
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        },
      },
    ],
  };
  return (
    <div>
      
      <Slider {...settings}>
        <div>
          <UserListUser
            title="user 1"
            amount="3300"
            bgcolor="rgba(108, 237, 75, 0.29)"
          />
        </div>

        <div>
          <UserListUser
            title="user 1"
            amount="1000"
            bgcolor="rgba(108, 237, 75, 0.29)"
          />
        </div>
        <div>
          <UserListUser
            title="user 2"
            amount="-3200"
            bgcolor="rgba(215, 44, 44, 0.29)"
          />
        </div>
        <div>
          <UserListUser
            title="user 3"
            amount="300"
            bgcolor="rgba(108, 237, 75, 0.29)"
          />
        </div>
        <div>
          <UserListUser
            title="user 4"
            amount="-1900"
            bgcolor="rgba(215, 44, 44, 0.29)"
          />
        </div>
        <div>
          <UserListUser
            title="user 5"
            amount="-4500"
            bgcolor="rgba(215, 44, 44, 0.29)"
          />
        </div>
        <div>
          <UserListUser
            title="user 6"
            amount="-450"
            bgcolor="rgba(215, 44, 44, 0.29)"
          />
        </div>
        <div>
          <UserListUser
            title="user 7"
            amount="-4500"
            bgcolor="rgba(108, 237, 75, 0.29)"
          />
        </div>
      </Slider>
    </div>
  );
};

export default UserList;
