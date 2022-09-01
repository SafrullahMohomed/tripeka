package com.example.postgre.Model.Requests;
import javax.validation.constraints.NotNull;

public class ForgotPasswordRequest {
    @NotNull
    private String email;

    // for deserialization
    public ForgotPasswordRequest() {}

    public ForgotPasswordRequest(String email) {
        super();
        this.email = email;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}