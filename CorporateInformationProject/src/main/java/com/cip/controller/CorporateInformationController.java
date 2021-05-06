package com.cip.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.cip.model.Contact;
import com.cip.service.IContactService;

@Controller
public class CorporateInformationController {
	@Autowired
	private IContactService service;
	
	@GetMapping(value = { "/" , "/addCorporate" })
	 String loadForm(Model model) {
		Contact c=new Contact();
		model.addAttribute("contact",c );		
		return "ContactInfo";
		
	}
	@PostMapping(value = {"/saveContact"})
	public String handleSubmitBtn(@ModelAttribute("contact") Contact c, Model model) {
		boolean isSave=service.saveContact(c);
		if(isSave) {
			model.addAttribute("sucessMsg","contact dtls are sucessfully register");
		}
		else {
			model.addAttribute("errorMsg","Not Registered");
		}
		return "ContactInfo";
	}
	
	@GetMapping("/viewContact")
	public String handleViewContactsLink(Model model) {
		List<Contact> contactList=service.getAllContacts();
		model.addAttribute("contacts", contactList);
		return "viewContacts";
	}

	

}
