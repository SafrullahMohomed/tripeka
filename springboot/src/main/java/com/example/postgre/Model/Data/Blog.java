package com.example.postgre.Model.Data;


import javax.persistence.*;

@Entity
@Table(name = "blog")
public class Blog {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long blogid;

    @Column(name ="userId")
    private  long userId;

    @Column(name = "title")
    private String  title;

    @Column(name = "description")
    private  String description;

    @Column(name ="status")
    private Boolean status;

    public Blog(long userId,String title, String description,boolean status){

    }

}
