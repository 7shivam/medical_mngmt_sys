package com.shivamrathore.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "medicals")
public class Medical {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "medicine_name")
	private String medicineName;
	
	@Column(name = "company_name")
	private String companyName;
	
	@Column(name = "email_id")
	private String emailId;
	
	@Column(name = "price")
	private Integer price;
	
	public Medical(){
		
	}
	
	
	
	
	public Medical(String medicineName, String companyName, String emailId, Integer price) {
		super();
		this.medicineName = medicineName;
		this.companyName = companyName;
		this.emailId = emailId;
		this.price = price;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getMedicineName() {
		return medicineName;
	}
	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}




	public Integer getPrice() {
		return price;
	}




	public void setPrice(Integer price) {
		this.price = price;
	}
	

}
