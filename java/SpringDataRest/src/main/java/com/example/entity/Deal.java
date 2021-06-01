package com.example.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Deal {
	
	@Id
	@GeneratedValue 
	private int dealid;
	private String dealName;
	public int getDealid() {
		return dealid;
	}
	public void setDealid(int dealid) {
		this.dealid = dealid;
	}
	public String getDealName() {
		return dealName;
	}
	public void setDealName(String dealName) {
		this.dealName = dealName;
	}
	@Override
	public String toString() {
		return "Deal [dealid=" + dealid + ", dealName=" + dealName + "]";
	}
	
	

}
