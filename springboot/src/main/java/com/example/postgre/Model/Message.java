package com.example.postgre.Model;

public class Message {

    private String senderName;
    private String content;
    private String profile_url;

    public Message(String senderName, String content, String profile_url) {
        this.senderName = senderName;
        this.content = content;
        this.profile_url = profile_url;
    }

    public String getSenderName() {
        return senderName;
    }

    public void setSenderName(String senderName) {
        this.senderName = senderName;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getProfile_url() {
        return profile_url;
    }

    public void setProfile_url(String profile_url) {
        this.profile_url = profile_url;
    }
}