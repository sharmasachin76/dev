package com.sachin.learning.SpringHibernate;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
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
	
	@OneToMany(mappedBy = "deal", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private Set<DealLenderContact> dealLenderContactLinks;

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

	public Set<DealLenderContact> getDealLenderContactLinks() {
		return dealLenderContactLinks;
	}

	public void setDealLenderContactLinks(Set<DealLenderContact> dealLenderContactLinks) {
		this.dealLenderContactLinks = dealLenderContactLinks;
	}
	
	
}
