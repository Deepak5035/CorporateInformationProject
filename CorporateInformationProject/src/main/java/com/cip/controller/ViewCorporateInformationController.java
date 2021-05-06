package com.cip.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.cip.model.Contact;
import com.cip.service.IContactService;

@Controller
public class ViewCorporateInformationController {
	
	@Autowired
	private IContactService service ;
	
	@RequestMapping("/editContact")
	String editContact(@RequestParam("cid") Integer contactId,Model model) {
		Contact c= service.getContactById(contactId);
		model.addAttribute("contact",c);
		return "ContactInfo";
		
	}

	@RequestMapping("/deleteContact")
	public String deleteContact(@RequestParam("cid") Integer contactId) {
		boolean existContact = service.deleteContact(contactId);
		if(existContact) {
			return "redirect:/viewContact";
		}
		else {
		 return null;
		 }
	}//deleteContact
}
