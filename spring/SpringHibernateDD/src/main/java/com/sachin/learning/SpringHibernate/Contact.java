package com.sachin.learning.SpringHibernate;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Contact {

	
	@Id
	private String contact_id;
	private String contact_name;
	private String contact_email;
	
	@OneToMany(mappedBy = "contact", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private Set<DealLenderContact> dealLenderContactLinks;

	public String getContact_id() {
		return contact_id;
	}

	public void setContact_id(String contact_id) {
		this.contact_id = contact_id;
	}

	public String getContact_name() {
		return contact_name;
	}

	public void setContact_name(String contact_name) {
		this.contact_name = contact_name;
	}

	public String getContact_email() {
		return contact_email;
	}

	public void setContact_email(String contact_email) {
		this.contact_email = contact_email;
	}

	public Set<DealLenderContact> getDealLenderContactLinks() {
		return dealLenderContactLinks;
	}

	public void setDealLenderContactLinks(Set<DealLenderContact> dealLenderContactLinks) {
		this.dealLenderContactLinks = dealLenderContactLinks;
	}

	
	
}
