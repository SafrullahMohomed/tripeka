package com.example.postgre.repository;

import com.example.postgre.Model.Data.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComplaintRepository extends JpaRepository<Complaint,Long> {
}
