package com.cip.model;

import java.io.Serializable;
import java.util.Date;

@SuppressWarnings("serial")
public class Contact implements Serializable{
	
	private Integer corporateId;
	private String corporateName;
	private String corporateEmail;
	private Long accountNumber;
	private Date createdDate;
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
