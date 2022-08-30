package com.example.postgre.Model.Response;

public class ForgotPasswordResponse {

    private boolean isSuccess;
    private String msg;

    public ForgotPasswordResponse(boolean isSuccess, String msg) {
        super();
        this.isSuccess = isSuccess;
        this.msg = msg;
    }

    public boolean isSuccess() {
        return this.isSuccess;
    }

    public void setSuccess(boolean success) {
        this.isSuccess = success;
    }

    public String getMsg() {
        return this.msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}