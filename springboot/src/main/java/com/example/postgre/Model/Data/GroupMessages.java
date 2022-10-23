package com.example.postgre.Model.Data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.catalina.User;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
//@IdClass(GroupMessagesId.class)
public class GroupMessages implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private Integer group_id;
    private Integer user_id;
    private String senderName;
    private Timestamp time;
    private String message;

    public GroupMessages(Integer group_id, Integer user_id, String senderName, Timestamp time, String message) {
        this.group_id = group_id;
        this.user_id = user_id;
        this.senderName = senderName;
        this.time = time;
        this.message = message;
    }
}
