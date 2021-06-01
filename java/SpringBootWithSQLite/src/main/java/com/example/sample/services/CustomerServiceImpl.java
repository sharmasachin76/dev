package com.example.sample.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.example.sample.entities.Customer;
import com.example.sample.repositories.CustomerRepository;

//@Component
//@Service("customerService")
public class CustomerServiceImpl { //implements CustomerService{

	@Autowired
	private CustomerRepository repo;
	
		
	//@Override
//	public Iterable<Customer> findAll() {
//		
//		return repo.findAll();
//	}

}
