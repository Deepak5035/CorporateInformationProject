package com.cip.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cip.entity.ContactEntity;
import com.cip.model.Contact;
import com.cip.repository.ContectRepository;
@Service
public class ImplContactService implements IContactService {
	
	@Autowired
	private ContectRepository repo;


	@Override
	public boolean saveContact(Contact c) {
		ContactEntity entity=new ContactEntity();
		BeanUtils.copyProperties(c, entity);
	    ContactEntity entity1=repo.save(entity);
		return entity1.getCorporateId()!=null;
	}

	@Override
	public List<Contact> getAllContacts() {
	
		List<ContactEntity> entities=repo.findAll();
		return entities.stream().map(entity -> {
			          Contact contact=new Contact();
			          BeanUtils.copyProperties(entity,contact);
			          return contact;
		   }).collect(Collectors.toList());
	}
	

	@Override
	public Contact getContactById(Integer cid) {
		  Optional<ContactEntity> optional = repo.findById(cid);
		  if(optional.isPresent()) {
			  ContactEntity entity=optional.get();
			  Contact contact=new Contact();
			  BeanUtils.copyProperties(entity, contact);
			  return contact;
		  }
		return null;
	}

	@Override
	public boolean deleteContact(Integer cid) {
		repo.deleteById(cid);
		return true;
	}

}
