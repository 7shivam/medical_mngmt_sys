package com.shivamrathore.springboot.controller;

import java.util.HashMap;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shivamrathore.springboot.exception.ResourceNotFoundException;
import com.shivamrathore.springboot.model.*;
import com.shivamrathore.springboot.repository.MedicalRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class MedicalController {
	
	@Autowired
	private MedicalRepository MedicalRepository;
	
	//get all Medicals
	@GetMapping("/Medicals")
	public List<Medical> getAllMedicals(){
		return MedicalRepository.findAll();
	}
	
	//create Medical rest api
	@PostMapping("/Medicals")
	public Medical createMedical(@RequestBody Medical Medical) {
		return MedicalRepository.save(Medical);
	}
	
	//get Medical by id rest api
	@GetMapping("/Medicals/{id}")
	public ResponseEntity<Medical> getMedicalById(@PathVariable Long id){
		Medical Medical = MedicalRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Medical not exist with id :" + id));
		return ResponseEntity.ok(Medical);
	}
	// update Medical rest api
	@PutMapping("/Medicals/{id}")
	public ResponseEntity<Medical> updateMedical(@PathVariable Long id, @RequestBody Medical MedicalDetails){
		Medical Medical = MedicalRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Medical not exist with id :" + id));
		
		Medical.setMedicineName(MedicalDetails.getMedicineName());
		Medical.setCompanyName(MedicalDetails.getCompanyName());
		Medical.setEmailId(MedicalDetails.getEmailId());
		Medical.setPrice(MedicalDetails.getPrice());
		Medical updatedMedical = MedicalRepository.save(Medical);
		return ResponseEntity.ok(updatedMedical);
	}
	
	// delete Medical rest api
		@DeleteMapping("/Medicals/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteMedical(@PathVariable Long id){
			Medical Medical = MedicalRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Medical not exist with id :" + id));
			
			MedicalRepository.delete(Medical);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}
