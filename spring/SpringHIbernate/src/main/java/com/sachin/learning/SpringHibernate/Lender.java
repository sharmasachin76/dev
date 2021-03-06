package com.sachin.learning.SpringHibernate;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

@Entity
public class Lender {
	@Id
	private String ms_lender_id;
	private String dd_firm_drid;
	private String lender_name;
	
	@ManyToMany
	private List<Contact> contact = new ArrayList<Contact>();
	
	public List<Contact> getContact() {
		return contact;
	}
	public void setContact(List<Contact> contact) {
		this.contact = contact;
	}
	public String getMs_lender_id() {
		return ms_lender_id;
	}
	public void setMs_lender_id(String ms_lender_id) {
		this.ms_lender_id = ms_lender_id;
	}
	public String getDd_firm_drid() {
		return dd_firm_drid;
	}
	public void setDd_firm_drid(String dd_firm_drid) {
		this.dd_firm_drid = dd_firm_drid;
	}
	public String getLender_name() {
		return lender_name;
	}
	public void setLender_name(String lender_name) {
		this.lender_name = lender_name;
	}
	@Override
	public String toString() {
		return "Lender [ms_lender_id=" + ms_lender_id + ", dd_firm_drid=" + dd_firm_drid + ", lender_name="
				+ lender_name + ", contact=" + contact + "]";
	}
	
	
	
	

}
