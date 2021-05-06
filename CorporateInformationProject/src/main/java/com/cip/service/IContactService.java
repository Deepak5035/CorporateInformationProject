package com.cip.service;

import java.util.List;

import com.cip.model.Contact;

public interface IContactService {
	
	boolean saveContact(Contact c);
	
	List<Contact> getAllContacts( );
	
	Contact getContactById(Integer cid);
		
	boolean deleteContact(Integer cid);

}
