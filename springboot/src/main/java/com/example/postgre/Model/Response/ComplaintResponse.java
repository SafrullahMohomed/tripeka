package com.example.postgre.Model.Response;

public class ComplaintResponse {
    private boolean isSucess;
    private String msg;

    public ComplaintResponse(boolean isSucess, String msg) {
        super();
        this.isSucess = isSucess;
        this.msg = msg;
    }

    public boolean getIsSucess() {
        return isSucess;
    }

    public void setIsSucess(boolean isSucess) {
        this.isSucess = isSucess;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
