package com.example.postgre.Model.Response;

public class SubscribeResponse {
    private boolean isSucess;
    private String msg;

    public SubscribeResponse(boolean isSucess, String msg) {
        super();
        this.isSucess = isSucess;
        this.msg = msg;
    }

    public boolean isSucess() {
        return isSucess;
    }

    public void setSucess(boolean sucess) {
        isSucess = sucess;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
