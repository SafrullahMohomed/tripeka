package com.example.postgre.Configuration;


import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfiguration implements WebSocketMessageBrokerConfigurer {
    /**
     *
     * @param config
     * Here we have enabled simple in memory message broker. We can register rabbit MQ also as message broker
     * by using the MessageBrokerRegistry config methods/
     */
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/chat-room");
//        config.enableSimpleBroker("/receive-live-location");
        config.setApplicationDestinationPrefixes("/chat-app");
    }

    @Override
    public void registerStompEndpoints(final StompEndpointRegistry registry) {
//        registry.addEndpoint("/ws").setAllowedOrigins("*").withSockJS();
        registry.addEndpoint("/ws").setAllowedOrigins("http://localhost:3000").withSockJS();
//        registry.addEndpoint("/ws").withSockJS();
//        registry.addEndpoint("/ws").setAllowedOriginPatterns("http://localhost:3000").withSockJS();

    }



}
