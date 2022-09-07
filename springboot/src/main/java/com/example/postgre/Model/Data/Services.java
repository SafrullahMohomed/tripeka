package com.example.postgre.Model.Data;

import javax.persistence.*;

@Entity
@Table(name = "services")
public class Services {
    @Id
    @SequenceGenerator(
            name = "service_sequence",
            sequenceName = "service_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "service_sequence"
    )
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
