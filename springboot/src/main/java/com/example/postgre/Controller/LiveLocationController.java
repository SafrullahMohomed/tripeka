//package com.example.postgre.Controller;
//import com.example.postgre.Model.Data.LiveLocationData;
//import com.example.postgre.Model.Message;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.messaging.handler.annotation.DestinationVariable;
//import org.springframework.messaging.handler.annotation.MessageMapping;
//import org.springframework.messaging.handler.annotation.Payload;
//import org.springframework.messaging.handler.annotation.SendTo;
//import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
//import org.springframework.messaging.simp.SimpMessageSendingOperations;
//import org.springframework.stereotype.Controller;
//
//import static java.lang.String.format;
//
//@Controller
//public class LiveLocationController {
//
//    private static final Logger logger = LoggerFactory.getLogger(ChatRoomController.class);
//    @Autowired
//    private SimpMessageSendingOperations messagingTemplate;
//
//    @MessageMapping("/send-live-location/{group_id}/sendLocation")
//    public void sendMessage(@DestinationVariable String group_id, @Payload LiveLocationData liveLocationData) {
//        logger.info(group_id+" LIVE LOCATION received is "+liveLocationData.toString());
//        System.out.println(group_id+" LIVE LOCATION received is "+liveLocationData.toString());
//        messagingTemplate.convertAndSend(format("/receive-live-location/%s", group_id), liveLocationData);
//    }
//}
