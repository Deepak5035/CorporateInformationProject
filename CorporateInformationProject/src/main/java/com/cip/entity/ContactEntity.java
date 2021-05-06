package com.cip.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


@Entity
@Table(name = "CONTACT_DTLS")
public class ContactEntity {
	@Id
	@Column(name = "CORPORATE_ID")
	@SequenceGenerator(name = "cid_seq_gen",
	                   sequenceName = "CONTACT_ID_SEQ" ,        
	                   allocationSize = 1)
	
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cid_seq_gen")
	private Integer corporateId;
	
	@Column(name = "CORPORATE_NAME")
	private String corporateName;
	
	@Column(name = "CORPORATE_EMAIL")
	private String corporateEmail;
	
	@Column(name = "ACCOUNT_NUMBER")
	private Long accountNumber;
	
	@Column(name = "CREATED_DATE")
	@CreationTimestamp  
	@Temporal(TemporalType.DATE)   
	private Date createdDate;
	
	@Column(name= "UPDATED_DATE")
	@UpdateTimestamp    
	@Temporal(TemporalType.DATE)
	
	private Date updatedDate;

	public Integer getCorporateId() {
		return corporateId;
	}

	public void setCorporateId(Integer corporateId) {
		this.corporateId = corporateId;
	}

	public String getCorporateName() {
		return corporateName;
	}

	public void setCorporateName(String corporateName) {
		this.corporateName = corporateName;
	}

	public String getCorporateEmail() {
		return corporateEmail;
	}

	public void setCorporateEmail(String corporateEmail) {
		this.corporateEmail = corporateEmail;
	}

	public Long getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(Long accountNumber) {
		this.accountNumber = accountNumber;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}




 
}
