package com.example.postgre.service;

import com.example.postgre.Model.Data.Users;
import com.example.postgre.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


import java.util.Arrays;
import java.util.stream.Collectors;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {

        //Logic to get the user form the Database

            Users user = userRepository.findByEmail(userName);


            System.out.println("IN loadByUsername METHOD");


            return new User(user.getUser_id().toString(), user.getHashedpswd(), Arrays.stream(user.getUserrole().split(","))
                    .map(SimpleGrantedAuthority::new)
                    .collect(Collectors.toList()));


    }

}
