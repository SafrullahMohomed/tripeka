// import React, { useEffect, useState } from "react";
// import { over } from "stompjs";
// import SockJS from "sockjs-client";
// import "../styles/chat.css";
// import jwt_decode from "jwt-decode";

// var stompClient = null;
// var subscription = null;

// const MyChatRoom = () => {
//   var decoded = jwt_decode(JSON.parse(localStorage.getItem("user")).jwtToken);

//   console.log(decoded);
//   const username = decoded.sub;
//   const [textBoxMessage, settextBoxMessage] = useState();
//   const [groupList, setgroupList] = useState([]);
//   const [currentGroup, setcurrentGroup] = useState(null);
//   const [messages, setmessages] = useState([
//     {
//       senderName: "Ronald",
//       content: "Testing message 1.",
//       id: "1",
//     },
//     {
//       senderName: "Haathim",
//       content: "Testing message 2.",
//       id: "2",
//     },
//     {
//       senderName: "Hermione",
//       content: "Testing message 3.",
//       id: "3",
//     },
//     {
//       senderName: "Ronald",
//       content: "Testing message 4.",
//       id: "4",
//     },
//   ]);

//   // these are just some dummy data for initial data for group messages
//   const groupMessages = {
//     group1: [
//       {
//         senderName: "Ronald1",
//         content: "Testing message 1.",
//         id: "1",
//       },
//       {
//         senderName: "Haathim",
//         content: "Testing message 2.",
//         id: "2",
//       },
//       {
//         senderName: "Hermione1",
//         content: "Testing message 3.",
//         id: "3",
//       },
//       {
//         senderName: "Ronald1",
//         content: "Testing message 4.",
//         id: "4",
//       },
//     ],
//     group2: [
//       {
//         senderName: "Ronald2",
//         content: "Testing message 1.",
//         id: "1",
//       },
//       {
//         senderName: "Haathim",
//         content: "Testing message 2.",
//         id: "2",
//       },
//       {
//         senderName: "Hermione2",
//         content: "Testing message 3.",
//         id: "3",
//       },
//       {
//         senderName: "Ronald2",
//         content: "Testing message 4.",
//         id: "4",
//       },
//     ],
//     group3: [
//       {
//         senderName: "Ronald3",
//         content: "Testing message 1.",
//         id: "1",
//       },
//       {
//         senderName: "Haathim",
//         content: "Testing message 2.",
//         id: "2",
//       },
//       {
//         senderName: "Hermione3",
//         content: "Testing message 3.",
//         id: "3",
//       },
//       {
//         senderName: "Ronald3",
//         content: "Testing message 4.",
//         id: "4",
//       },
//     ],
//   };

//   useEffect(() => {
//     // fetch all the group names of the user from db
//     setgroupList(["group1", "group2", "group3"]);
//     connect();
//   }, []);

//   const connect = () => {
//     let Sock = new SockJS("http://localhost:8080/ws");
//     stompClient = over(Sock);
//     stompClient.connect({}, onConnected, onError);
//   };

//   const onConnected = () => {
//     // debugging
//     console.log("Connected to socket.");
//   };

//   const onError = (err) => {
//     console.log(err);
//   };

//   const onClickGroup = (group) => {
//     console.log(group);
//     setcurrentGroup(group);
//     // disconnect from the earlier
//     if (subscription !== null) {
//       subscription.unsubscribe();
//       // fetch all messages for that group
//       // setmessages([
//       //   {
//       //     senderName: "Ronald",
//       //     content: "Testing message 1.",
//       //     id: "1",
//       //   },
//       //   {
//       //     senderName: "Haathim",
//       //     content: "Testing message 2.",
//       //     id: "2",
//       //   },
//       //   {
//       //     senderName: "Hermione",
//       //     content: "Testing message 3.",
//       //     id: "3",
//       //   },
//       //   {
//       //     senderName: "Ronald",
//       //     content: "Testing message 4.",
//       //     id: "4",
//       //   },
//       //   {
//       //     senderName: "Steve",
//       //     content: "Testing message 5.",
//       //     id: "5",
//       //   },
//       // ]);
//     }
//     subscription = stompClient.subscribe(
//       "/chat-room/" + group,
//       onRecieveMessage
//     );
//     setmessages(groupMessages[group]);
//   };

//   const onSubscribe = (payload) => {
//     console.log("Subscribed to new group...");
//     console.log(payload);
//   };

//   const onRecieveMessage = (payload) => {
//     console.log(payload);
//     var payloadData = JSON.parse(payload.body);
//     console.log(payloadData);

//     // this is just to add unique keys to messages, ideally should be the messageID from the database
//     let r = (Math.random() + 1).toString(36).substring(7);
//     messages.push({
//       senderName: payloadData.senderName,
//       content: payloadData.content,
//       id: r,
//     });
//     console.log(messages);
//     setmessages([...messages]);
//   };

//   const handleTextboxMessage = (event) => {
//     settextBoxMessage(event.target.value);
//   };

//   const sendm = () => {
//     console.log("Sending.....");
//     if (stompClient) {
//       var chatMessage = {
//         senderName: username,
//         content: textBoxMessage,
//       };
//       console.log(chatMessage);
//       stompClient.send(
//         "/chat-app/chat/" + currentGroup + "/sendMessage",
//         {},
//         JSON.stringify(chatMessage)
//       );
//       settextBoxMessage("");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="chat-box">
//         <div className="member-list">
//           <ul>
//             {groupList.map((group) => (
//               <li
//                 onClick={() => {
//                   onClickGroup(group);
//                 }}
//                 className={`member ${currentGroup === group && "active"}`}
//               >
//                 {group}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="chat-content">
//           <ul className="chat-messages">
//             {messages.map((message) => (
//               <li
//                 className={`message ${
//                   message.senderName === username && "self"
//                 }`}
//                 key={message.id}
//               >
//                 {message.senderName !== username && (
//                   <div className="avatar">{message.senderName}</div>
//                 )}
//                 <div className="message-data">{message.content}</div>
//                 {message.senderName === username && (
//                   <div className="avatar self">{message.senderName}</div>
//                 )}
//               </li>
//             ))}
//           </ul>

//           <div className="send-message">
//             <input
//               type="text"
//               className="input-message"
//               placeholder="enter the message"
//               value={textBoxMessage}
//               onChange={handleTextboxMessage}
//             />
//             <button type="button" className="send-button" onClick={sendm}>
//               send
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyChatRoom;

// import React, { useEffect, useState } from "react";
// import { over } from "stompjs";
// import SockJS from "sockjs-client";

// var stompClient = null;
// var subscription = null;

// const ChatRoom = () => {
//   const username = "Haathim";
//   const [textBoxMessage, settextBoxMessage] = useState();
//   const [groupList, setgroupList] = useState([]);
//   const [currentGroup, setcurrentGroup] = useState(null);
//   const [messages, setmessages] = useState([
//     {
//       senderName: "Ronald",
//       content: "Testing message 1.",
//       id: "1",
//     },
//     {
//       senderName: "Haathim",
//       content: "Testing message 2.",
//       id: "2",
//     },
//     {
//       senderName: "Hermione",
//       content: "Testing message 3.",
//       id: "3",
//     },
//     {
//       senderName: "Ronald",
//       content: "Testing message 4.",
//       id: "4",
//     },
//   ]);

//   // these are just some dummy data for initial data for group messages
//   const groupMessages = {
//     group1: [
//       {
//         senderName: "Ronald1",
//         content: "Testing message 1.",
//         id: "1",
//       },
//       {
//         senderName: "Haathim",
//         content: "Testing message 2.",
//         id: "2",
//       },
//       {
//         senderName: "Hermione1",
//         content: "Testing message 3.",
//         id: "3",
//       },
//       {
//         senderName: "Ronald1",
//         content: "Testing message 4.",
//         id: "4",
//       },
//     ],
//     group2: [
//       {
//         senderName: "Ronald2",
//         content: "Testing message 1.",
//         id: "1",
//       },
//       {
//         senderName: "Haathim",
//         content: "Testing message 2.",
//         id: "2",
//       },
//       {
//         senderName: "Hermione2",
//         content: "Testing message 3.",
//         id: "3",
//       },
//       {
//         senderName: "Ronald2",
//         content: "Testing message 4.",
//         id: "4",
//       },
//     ],
//     group3: [
//       {
//         senderName: "Ronald3",
//         content: "Testing message 1.",
//         id: "1",
//       },
//       {
//         senderName: "Haathim",
//         content: "Testing message 2.",
//         id: "2",
//       },
//       {
//         senderName: "Hermione3",
//         content: "Testing message 3.",
//         id: "3",
//       },
//       {
//         senderName: "Ronald3",
//         content: "Testing message 4.",
//         id: "4",
//       },
//     ],
//   };

//   useEffect(() => {
//     // fetch all the group names of the user from db
//     setgroupList(["group1", "group2", "group3"]);
//     connect();
//   }, []);

//   const connect = () => {
//     let Sock = new SockJS("http://localhost:8080/ws");
//     stompClient = over(Sock);
//     stompClient.connect({}, onConnected, onError);
//   };

//   const onConnected = () => {
//     // debugging
//     console.log("Connected to socket.");
//   };

//   const onError = (err) => {
//     console.log(err);
//   };

//   const onClickGroup = (group) => {
//     console.log(group);
//     setcurrentGroup(group);
//     // disconnect from the earlier
//     if (subscription !== null) {
//       subscription.unsubscribe();
//       // fetch all messages for that group
//       // setmessages([
//       //   {
//       //     senderName: "Ronald",
//       //     content: "Testing message 1.",
//       //     id: "1",
//       //   },
//       //   {
//       //     senderName: "Haathim",
//       //     content: "Testing message 2.",
//       //     id: "2",
//       //   },
//       //   {
//       //     senderName: "Hermione",
//       //     content: "Testing message 3.",
//       //     id: "3",
//       //   },
//       //   {
//       //     senderName: "Ronald",
//       //     content: "Testing message 4.",
//       //     id: "4",
//       //   },
//       //   {
//       //     senderName: "Steve",
//       //     content: "Testing message 5.",
//       //     id: "5",
//       //   },
//       // ]);
//     }
//     subscription = stompClient.subscribe(
//       "/chat-room/" + group,
//       onRecieveMessage
//     );
//     setmessages(groupMessages[group]);
//   };

//   const onSubscribe = (payload) => {
//     console.log("Subscribed to new group...");
//     console.log(payload);
//   };

//   const onRecieveMessage = (payload) => {
//     console.log(payload);
//     var payloadData = JSON.parse(payload.body);
//     console.log(payloadData);

//     // this is just to add unique keys to messages, ideally should be the messageID from the database
//     let r = (Math.random() + 1).toString(36).substring(7);
//     messages.push({
//       senderName: payloadData.senderName,
//       content: payloadData.content,
//       id: r,
//     });
//     console.log(messages);
//     setmessages([...messages]);
//   };

//   const handleTextboxMessage = (event) => {
//     settextBoxMessage(event.target.value);
//   };

//   const sendMessage = () => {
//     console.log("Sending.....");
//     if (stompClient) {
//       var chatMessage = {
//         senderName: username,
//         content: textBoxMessage,
//       };
//       console.log(chatMessage);
//       stompClient.send(
//         "/chat-app/chat/" + currentGroup + "/sendMessage",
//         {},
//         JSON.stringify(chatMessage)
//       );
//       settextBoxMessage("");
//     }
//   };

//   return (
//     <div className="relative border border-black">
//       <div className="flex flex-row my-10 mx-12 p-2">
//         <div className="w-1/5">
//           <ul>
//             {groupList.map((group) => (
//               <li
//                 onClick={() => {
//                   onClickGroup(group);
//                 }}
//                 className={`w-4/5 ml-3 ${
//                   currentGroup === group && "bg-blue-50"
//                 }`}
//               >
//                 {group}
//               </li>
//             ))}
//           </ul>
//         </div>

// <div className="w-4/5 ml-2">
//   <ul className="h-4/5 border-1 bg-red-50">
//     {messages.map((message) => (
//       <li
//         className={`flex flex-row my-1 mx-2 p-1 w-auto ${
//           message.senderName === username && "justify-end"
//         }`}
//         key={message.id}
//       >
//         {message.senderName !== username && (
//           <div className="avatar">{message.senderName}</div>
//         )}
//         <div className="p-1">{message.content}</div>
//         {message.senderName === username && (
//           <div className="rounded p-1 text-white bg-yellow">
//             {message.senderName}
//           </div>
//         )}
//       </li>
//     ))}
//   </ul>

//           <div className="flex flex-row w-full border">
//             <input
//               type="text"
//               className="w-8/10 bg-red-50"
//               placeholder="enter the message"
//               value={textBoxMessage}
//               onChange={handleTextboxMessage}
//             />
//             <button
//               type="button"
//               className="cursor-pointer ml-1 w-1/10 justify-end bg-green-50"
//               onClick={sendMessage}
//             >
//               send
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatRoom;

// SHANIG

import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SendIcon from "@mui/icons-material/Send";
import React, { useEffect, useState } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import "../styles/chat.css";
import jwt_decode from "jwt-decode";

var stompClient = null;
var subscription = null;

const MyChatRoom = () => {
  var decoded = jwt_decode(JSON.parse(localStorage.getItem("user")).jwtToken);
  console.log(decoded);
  const username = decoded.sub;
  const [textBoxMessage, settextBoxMessage] = useState();
  const [groupList, setgroupList] = useState([]);
  const [currentGroup, setcurrentGroup] = useState(null);
  const [messages, setmessages] = useState([
    {
      senderName: "Ronald",
      content: "Testing message 1.",
      id: "1",
    },
    {
      senderName: "Haathim",
      content: "Testing message 2.",
      id: "2",
    },
    {
      senderName: "Hermione",
      content: "Testing message 3.",
      id: "3",
    },
    {
      senderName: "Ronald",
      content: "Testing message 4.",
      id: "4",
    },
  ]);

  // these are just some dummy data for initial data for group messages
  const groupMessages = {
    group1: [
      {
        senderName: "Ronald1",
        content: "Testing message 1.",
        id: "1",
      },
      {
        senderName: "Haathim",
        content: "Testing message 2.",
        id: "2",
      },
      {
        senderName: "Hermione1",
        content: "Testing message 3.",
        id: "3",
      },
      {
        senderName: "Ronald1",
        content: "Testing message 4.",
        id: "4",
      },
    ],
    group2: [
      {
        senderName: "Ronald2",
        content: "Testing message 1.",
        id: "1",
      },
      {
        senderName: "Haathim",
        content: "Testing message 2.",
        id: "2",
      },
      {
        senderName: "Hermione2",
        content: "Testing message 3.",
        id: "3",
      },
      {
        senderName: "Ronald2",
        content: "Testing message 4.",
        id: "4",
      },
    ],
    group3: [
      {
        senderName: "Ronald3",
        content: "Testing message 1.",
        id: "1",
      },
      {
        senderName: "Haathim",
        content: "Testing message 2.",
        id: "2",
      },
      {
        senderName: "Hermione3",
        content: "Testing message 3.",
        id: "3",
      },
      {
        senderName: "Ronald3",
        content: "Testing message 4.",
        id: "4",
      },
    ],
  };

  useEffect(() => {
    // fetch all the group names of the user from db
    setgroupList(["group1", "group2", "group3"]);
    connect();
  }, []);

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
    console.log(group);
    setcurrentGroup(group);
    // disconnect from the earlier
    if (subscription !== null) {
      subscription.unsubscribe();
      // fetch all messages for that group
    }
    subscription = stompClient.subscribe(
      "/chat-room/" + group,
      onRecieveMessage
    );
    setmessages(groupMessages[group]);
  };

  const onSubscribe = (payload) => {
    console.log("Subscribed to new group...");
    console.log(payload);
  };

  const onRecieveMessage = (payload) => {
    console.log(payload);
    var payloadData = JSON.parse(payload.body);
    console.log(payloadData);

    // this is just to add unique keys to messages, ideally should be the messageID from the database
    let r = (Math.random() + 1).toString(36).substring(7);
    messages.push({
      senderName: payloadData.senderName,
      content: payloadData.content,
      id: r,
    });
    console.log(messages);
    setmessages([...messages]);
  };

  const handleTextboxMessage = (event) => {
    settextBoxMessage(event.target.value);
  };

  const sendMessage = () => {
    console.log("Sending.....");
    if (stompClient) {
      var chatMessage = {
        senderName: username,
        content: textBoxMessage,
      };
      console.log(chatMessage);
      stompClient.send(
        "/chat-app/chat/" + currentGroup + "/sendMessage",
        {},
        JSON.stringify(chatMessage)
      );
      settextBoxMessage("");
    }
  };

  return (
    <div className="flex flex-row m-16 max-h-screen">
      <div className="hidden lg:flex flex-col basis-1/3  max-h-screen border-r-2 ">
        {/* Search Bar */}
        <div className="mt-6 ml-3 mr-1">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <SearchIcon
                className="!h-5 !w-5 fill-slate-300"
                viewBox="0 0 20 20"
              />
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for Chats..."
              type="text"
              name="search"
            />
          </label>
        </div>

        {/* Group List */}
        <div className="overflow-auto max-h-min  mt-3">
          {groupList.map((group) => (
            <div
              className="grid grid-cols-6 p-3 m-3 border-b-2"
              onClick={() => {
                onClickGroup(group);
              }}
            >
              <div></div>
              <div className="col-span-5 flex flex-col">
                <p className="text-lg font-medium capitalize truncate">
                  {group}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Group */}
      <div className=" flex flex-col lg:basis-2/3 basis-full mt-6 ml-3">
        <div className="flex flex-row justify-start items-center border-b-2">
          <ArrowBackIosIcon className="!w-5 !h-10 mr-5 lg:!hidden" />
          <p className="font-serif text-2xl capitalize">{currentGroup}</p>
        </div>

        {/* Messages */}
        {messages.map((message) => (
          <div
            className={
              message.senderName !== username
                ? "flex flex-row p-3 m-3 items-center justify-start"
                : "flex flex-row-reverse p-3 m-3 items-center justify-start"
            }
            key={message.id}
          >
            <div>
              <img
                class="inline-block h-9 w-9 rounded-full ring-2 ring-black"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div>
              <div className="flex ">
                <p className="text-sm italic ml-3 max-w-md">
                  {message.content}
                </p>
              </div>
              <div className="flex">
                <p className="text-sm italic ml-3 max-w-md font-bold">
                  {message.senderName}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Send Text Box */}
        <div className="flex flex-row mt-5">
          <div className="basis-full">
            <label>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-1 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                type="text"
                name="search"
                placeholder="enter the message"
                value={textBoxMessage}
                onChange={handleTextboxMessage}
              />
            </label>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="cursor-pointer ml-1 w-1/10 justify-end bg-black"
              onClick={sendMessage}
            >
              <span>
                <SendIcon
                  className="!h-10 !w-10 fill-red-600 hover:fill-lime-500"
                  viewBox="0 0 20 20"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyChatRoom;
