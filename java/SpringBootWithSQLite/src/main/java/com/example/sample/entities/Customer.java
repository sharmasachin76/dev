package com.example.sample.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="customer")
public class Customer {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int custId;
	private String custName;
	private String custCity;
	
	public int getCustID() {
		return custId;
	}
	public void setCustID(int custID) {
		this.custId = custID;
	}
	public String getCustName() {
		return custName;
	}
	public void setCustName(String custName) {
		this.custName = custName;
	}
	public String getCustCity() {
		return custCity;
	}
	public void setCustCity(String custCity) {
		this.custCity = custCity;
	}
	@Override
	public String toString() {
		return "Customer [custID=" + custId + ", custName=" + custName + ", custCity=" + custCity + "]";
	}
	
	
	
}
