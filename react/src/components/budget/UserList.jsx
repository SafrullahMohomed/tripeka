import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserListUser from "./UserListUser";
import {
  getTotalamountSpendedByGroupId
} from "../../services/BudgetService";
import { useEffect, useState } from "react";
import { bgcolor } from "@mui/system";




const UserList = (props) => {
  const [totalAmountSpended, setTotalAmountSpended] = useState([]);
  const group_id_int = parseInt(props.group_id);


const init = async() => {
  // to get total amount spended by group
  await getTotalamountSpendedByGroupId(group_id_int)
    .then((response) => {
      setTotalAmountSpended(response.data);
    })
    .catch((err) => {
      console.log("Something went wrong", err);
      
    });


    useEffect(() => {
     init();
    }, []);

    () =>{init()}
    ;
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
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },

      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <UserListUser
            title="Nimal"
            amount="3300"
            bgcolor="rgba(108, 237, 75, 0.29)"
          />
        </div>

        {totalAmountSpended.map((user) => (
          <div>
            if ({user.amount >= 0}) {
              
              
            }

      <UserListUser
            title={user.lastname}
            amount={user.amount}
            
            bgcolor="rgba(108, 237, 75, 0.29)"
          />
                    </div>
                  ))}
        <div>
          <UserListUser
            title="Sunil"
            amount="1000"
            bgcolor="rgba(108, 237, 75, 0.29)"
          />
        </div>
        <div>
          <UserListUser
            title="Kamal"
            amount="-3200"
            bgcolor="rgba(215, 44, 44, 0.29)"
          />
        </div>
        <div>
          <UserListUser
            title="Piyum"
            amount="300"
            bgcolor="rgba(108, 237, 75, 0.29)"
          />
        </div>
        <div>
          <UserListUser
            title="Naween"
            amount="-1900"
            bgcolor="rgba(215, 44, 44, 0.29)"
          />
        </div>
        <div>
          <UserListUser
            title="Sithira"
            amount="-4500"
            bgcolor="rgba(215, 44, 44, 0.29)"
          />
        </div>
        <div>
          <UserListUser
            title="Kavindu"
            amount="-450"
            bgcolor="rgba(215, 44, 44, 0.29)"
          />
        </div>
        <div>
          <UserListUser
            title="Amal"
            amount="-4500"
            bgcolor="rgba(108, 237, 75, 0.29)"
          />
        </div>
      </Slider>
    </div>
  );
};
}
export default UserList
