package com.sachin.learning.SpringHibernate;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

@Entity
public class Deal {
	
	@Id
	private String ms_dealid;
	private String dd_deal_drid;
	private String deal_name;
	@ManyToMany
	private List<Lender> lender = new ArrayList<Lender>();
		
	
	public List<Lender> getLender() {
		return lender;
	}
	public void setLender(List<Lender> lender) {
		this.lender = lender;
	}
	public String getMs_dealid() {
		return ms_dealid;
	}
	public void setMs_dealid(String ms_dealid) {
		this.ms_dealid = ms_dealid;
	}
	public String getDd_deal_drid() {
		return dd_deal_drid;
	}
	public void setDd_deal_drid(String dd_deal_drid) {
		this.dd_deal_drid = dd_deal_drid;
	}
	public String getDeal_name() {
		return deal_name;
	}
	public void setDeal_name(String deal_name) {
		this.deal_name = deal_name;
	}
	@Override
	public String toString() {
		return "Deal [ms_dealid=" + ms_dealid + ", dd_deal_drid=" + dd_deal_drid + ", deal_name=" + deal_name
				+ ", lender=" + lender + "]";
	}
	
}
