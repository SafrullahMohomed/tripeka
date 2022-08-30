package com.example.postgre.Model.Requests;
import javax.validation.constraints.NotNull;

public class ResetPasswordRequest {

    @NotNull
    private String email;
    @NotNull
    private String hashedPass;
    @NotNull
    private String hashedConfirmPass;

    // for deserialization
    public ResetPasswordRequest() {}

    public ResetPasswordRequest(String email, String hashedPass, String hashedConfirmPass) {
        super();
        this.email = email;
        this.hashedPass = hashedPass;
        this.hashedConfirmPass = hashedConfirmPass;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHashedPass() {
        return this.hashedPass;
    }

    public void setHashedPass(String hashedPass) {
        this.hashedPass = hashedPass;
    }

    public String getHashedConfirmPass() {
        return this.hashedConfirmPass;
    }

    public void setHashedConfirmPass(String hashedConfirmPass) {
        this.hashedConfirmPass = hashedConfirmPass;
    }
}