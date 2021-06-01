package com.example.Sample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Customer {
	private String customerName;
	private String customerMEI;
	
	@Autowired
	private Address customerAddress;
	
	
	
	public Address getCustomerAddress() {
		return customerAddress;
	}
	public void setCustomerAddress(Address customerAddress) {
		this.customerAddress = customerAddress;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getCustomerMEI() {
		return customerMEI;
	}
	public void setCustomerMEI(String customerCity) {
		this.customerMEI = customerCity;
	}
	@Override
	public String toString() {
		return "Customer [customerName=" + customerName + ", customerMEI=" + customerMEI + ", customerAddress="
				+ customerAddress + "]";
	}
	
	
	
	
}
