package com.example.postgre.repository;

import com.example.postgre.Model.Data.ContactUs;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactUsRepository extends JpaRepository <ContactUs,Long> {
}
