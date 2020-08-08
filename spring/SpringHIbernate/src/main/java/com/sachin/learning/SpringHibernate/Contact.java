package com.sachin.learning.SpringHibernate;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Contact {

	
	@Id
	private String contact_id;
	private String contact_name;
	private String contact_email;
	
	
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
	@Override
	public String toString() {
		return "Contact [contact_id=" + contact_id + ", contact_name=" + contact_name + ", contact_email="
				+ contact_email + "]";
	}
	
			
}
