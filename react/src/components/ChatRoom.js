import React, { useEffect, useState } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import "../styles/chat.css";

var stompClient = null;
var subscription = null;

const MyChatRoom = () => {
  const username = "Haathim";
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
      // setmessages([
      //   {
      //     senderName: "Ronald",
      //     content: "Testing message 1.",
      //     id: "1",
      //   },
      //   {
      //     senderName: "Haathim",
      //     content: "Testing message 2.",
      //     id: "2",
      //   },
      //   {
      //     senderName: "Hermione",
      //     content: "Testing message 3.",
      //     id: "3",
      //   },
      //   {
      //     senderName: "Ronald",
      //     content: "Testing message 4.",
      //     id: "4",
      //   },
      //   {
      //     senderName: "Steve",
      //     content: "Testing message 5.",
      //     id: "5",
      //   },
      // ]);
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

  const sendm = () => {
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
    <div className="container">
      <div className="chat-box">
        <div className="member-list">
          <ul>
            {groupList.map((group) => (
              <li
                onClick={() => {
                  onClickGroup(group);
                }}
                className={`member ${currentGroup === group && "active"}`}
              >
                {group}
              </li>
            ))}
          </ul>
        </div>

        <div className="chat-content">
          <ul className="chat-messages">
            {messages.map((message) => (
              <li
                className={`message ${
                  message.senderName === username && "self"
                }`}
                key={message.id}
              >
                {message.senderName !== username && (
                  <div className="avatar">{message.senderName}</div>
                )}
                <div className="message-data">{message.content}</div>
                {message.senderName === username && (
                  <div className="avatar self">{message.senderName}</div>
                )}
              </li>
            ))}
          </ul>

          <div className="send-message">
            <input
              type="text"
              className="input-message"
              placeholder="enter the message"
              value={textBoxMessage}
              onChange={handleTextboxMessage}
            />
            <button type="button" className="send-button" onClick={sendm}>
              send
            </button>
          </div>
        </div>
      </div>
      <Box 
        sx={{ '& > :not(style)': { m: 1 }, position: 'fixed', bottom: 20, right: 30 }}
        onClick={() => window.location.href = '/budget'}
      >
        <Fab variant="extended" size="medium" color="primary" aria-label="add">
          <CreditCardIcon sx={{ mr: 1 }} />
          Budget
        </Fab>
      </Box>
    </div>
  );
};

export default MyChatRoom;

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

//         <div className="w-4/5 ml-2">
//           <ul className="h-4/5 border-1 bg-red-50">
//             {messages.map((message) => (
//               <li
//                 className={`flex flex-row my-1 mx-2 p-1 w-auto ${
//                   message.senderName === username && "justify-end"
//                 }`}
//                 key={message.id}
//               >
//                 {message.senderName !== username && (
//                   <div className="avatar">{message.senderName}</div>
//                 )}
//                 <div className="p-1">{message.content}</div>
//                 {message.senderName === username && (
//                   <div className="rounded p-1 text-white bg-yellow">
//                     {message.senderName}
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>

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
