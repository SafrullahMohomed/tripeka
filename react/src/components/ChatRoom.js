import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SendIcon from "@mui/icons-material/Send";
import Avatar from "@mui/material/Avatar";
import Header from "./Header";
import Footer from "./Footer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import "../styles/chat.css";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import { set } from "date-fns";
import authHeader from "../jwtAuthServices/auth-header";
import chatbg from "../assets/chatbg.jpg";
import GroupsIcon from '@mui/icons-material/Groups';

var stompClient = null;
var subscription = null;

const addMessageToDB = (group_id, chatMessage) => {
  return axios.post(ServerBaseUrl + "/groupMessages", chatMessage, { headers: authHeader() });
};

const MyChatRoom = () => {
  console.log("Main Function Ran....");
  var decoded = jwt_decode(JSON.parse(localStorage.getItem("user")).jwtToken);
  const username = decoded.sub;
  const userEmail = JSON.parse(localStorage.getItem("userDetails")).email;
  const user_id = JSON.parse(localStorage.getItem("userDetails")).user_id;
  const userFullName =
    JSON.parse(localStorage.getItem("userDetails")).firstname +
    " " +
    JSON.parse(localStorage.getItem("userDetails")).lastname;
  const [textBoxMessage, settextBoxMessage] = useState();
  const [groupList, setgroupList] = useState([]);
  const [currentGroup, setcurrentGroup] = useState(null);
  const [messages, setmessages] = useState([]);

  useEffect(() => {
    console.log("useEffect Ran....");
    // fetch all the group names of the user from db
    axios.get(ServerBaseUrl + "/groups/" + user_id).then((response) => {
      setgroupList(response.data.groups);
      connect();
    });
    // connect();
  }, [currentGroup]);

  const connect = () => {
    let Sock = new SockJS("http://localhost:8080/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    // debugging
    console.log("Connected to socket.");
  };

  const onError = (err) => {
    console.log(err);
  };

  const onClickGroup = (group) => {
    console.log("In onClickGroup()");
    setcurrentGroup(group);
    // // disconnect from the earlier
    if (subscription !== null) {
      subscription.unsubscribe();
      // fetch all messages for that group
      axios.get(ServerBaseUrl + "/groupMessages/" + group.group_id).then((response) => {
        setmessages(response.data);
      });
    }
    console.log(messages);
    subscription = stompClient.subscribe("/chat-room/" + group.group_id, onRecieveMessage);
  };

  const onSubscribe = (payload) => {
    console.log("Subscribed to new group...");
    console.log(payload);
  };

  const onRecieveMessage = (payload) => {
    console.log(payload);
    var payloadData = JSON.parse(payload.body);
    console.log(payloadData);
    console.log(messages);

    // this is just to add unique keys to messages, ideally should be the messageID from the database
    // let r = (Math.random() + 1).toString(36).substring(7);
    // messages.push({
    //   senderName: payloadData.senderName,
    //   content: payloadData.content,
    //   id: payloadData.id,
    // });
    // setmessages([
    //   ...messages,
    //   {
    //     senderName: payloadData.senderName,
    //     message: payloadData.content,
    //     id: payloadData.id,
    //   },
    // ]);
    setmessages((messages) => [
      ...messages,
      {
        senderName: payloadData.senderName,
        message: payloadData.content,
        id: payloadData.id,
      },
    ]);

    // if (!messages) {
    //   console.log("messages is empty....");
    //   setmessages(payloadData);
    // }

    console.log(messages);
    // setmessages([...messages]);
  };

  const handleTextboxMessage = (event) => {
    settextBoxMessage(event.target.value);
  };

  const sendMessage = () => {
    console.log("Sending.....");
    if (stompClient) {
      var chatMessage = {
        group_id: currentGroup.group_id,
        user_id: user_id,
        time: null,
        message: textBoxMessage,
      };
      let r = (Math.random() + 1).toString(36).substring(7);

      console.log(chatMessage);
      stompClient.send(
        "/chat-app/chat/" + currentGroup.group_id + "/sendMessage",
        {},
        JSON.stringify({
          senderName: userFullName,
          content: textBoxMessage,
          id: r,
        })
      );
      addMessageToDB(currentGroup.group_id, chatMessage)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      settextBoxMessage("");
    }
  };

  const navigate = useNavigate();

  return (
    <>
    <Header />
    <section class="text-gray-600 body-font px-5 h-screen">
    <div className="h-3/4 flex flex-row mx-10 my-4 max-h-screen bg-gray-200 border-2 gray-600" style={{ backgroundImage: `url(${chatbg})` }}>
      <div className="hidden lg:flex flex-col basis-1/3 max-h-screen bg-gray-200">
        <div className="pl-2 pt-2 cursor-pointer" onClick={() => navigate(-1)}>
          <Avatar>
            <ArrowBackIcon sx={{ margin: 1 }} />
          </Avatar>
        </div>
        
        {/* Search Bar */}
        {/* <div className="mt-6 ml-3 mr-1">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="inset-y-0 flex items-center pl-2">
              <SearchIcon className="!h-5 !w-5 fill-slate-300" viewBox="0 0 20 20" />
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for Chats..."
              type="text"
              name="search"
            />
          </label>
        </div> */}

        {/* Group List */}
        <div className="overflow-auto max-h-min  mt-3">
          {groupList.map((group) => (
            <div
              key={group.group_id}
              className="grid grid-cols-6 p-3 m-3 bg-gray-300 rounded-lg cursor-pointer"
              onClick={() => {
                onClickGroup(group);
              }}
            >
              <div className=""><GroupsIcon /></div>
              <div className="col-span-5 flex flex-col">
                <p className="text-lg font-medium capitalize truncate">{group.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

        {messages.length === 0 && currentGroup === null && 
          <div className="text-xl m-auto mt-20">
            CLICK ON A GROUP TO VIEW MESSAGES
          </div>
        }

      {/* Current Group */}
      {currentGroup !== null && (
        <div className="flex flex-col lg:basis-2/3 basis-full pt-6 px-3 overflow-auto pb-2" style={{ backgroundImage: `url(${chatbg})` }}>
          <div className="flex flex-row justify-start items-center bg-gray-100 p-2 rounded-lg">
            <ArrowBackIosIcon className="!w-5 !h-10 mr-5 lg:!hidden" />
            <p className="font-serif text-2xl capitalize">{currentGroup.name}</p>
          </div>

          {/* Messages */}
          <div className="w-full h-full my-2">
          {messages.map((message) => (
            <div
              className={
                message.senderName !== userFullName
                  ? "flex flex-row p-3 m-3 items-center justify-start "
                  : "flex flex-row-reverse p-3 m-3 items-center justify-start "
              }
              key={message.id}
            >
              <div className="ml-2">
                <img
                  class="inline-block h-9 w-9 rounded-full ring-2 ring-black"
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="bg-white rounded p-2 border gray-600">
                <div className="flex ">
                  <p className="text-sm max-w-md ">{message.message}</p>
                </div>
                <div className="flex">
                  <p className="text-sm italic max-w-md font-bold">{message.senderName}</p>
                </div>
              </div>
            </div>
          ))}          
          </div>

          {/* Send Text Box */}
          <div className="w-full flex items-center flex-row my-2">
            <div className="basis-full">
              <label>
                <input
                  className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-1 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  type="text"
                  name="search"
                  placeholder="Message"
                  value={textBoxMessage}
                  onChange={handleTextboxMessage}
                />
              </label>
            </div>

            <button className="cursor-pointer rounded-full bg-gray-400 ml-1 p-2" onClick={sendMessage}>
                <SendIcon fontSize="medium" />
            </button>
          </div>
        </div>
      )}
    </div>
    </section>
    <Footer />
    </>
  );
};

export default MyChatRoom;
