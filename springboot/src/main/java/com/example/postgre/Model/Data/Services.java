package com.example.postgre.Model.Data;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "services")
public class Services {
    
    private String service;
    private String description;

    public String getService() {
        return service;
    }
    public void setService(String service) {
        this.service = service;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    
    
}
