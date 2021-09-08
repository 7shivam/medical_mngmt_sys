package com.shivamrathore.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shivamrathore.springboot.model.Medical;

@Repository
public interface MedicalRepository extends JpaRepository<Medical, Long>{

}
