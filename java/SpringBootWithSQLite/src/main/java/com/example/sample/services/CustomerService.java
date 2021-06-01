package com.example.sample.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

import com.example.sample.entities.Customer;
import com.example.sample.repositories.CustomerRepository;

/*
public interface CustomerService {

	public Iterable<Customer> findAll();
}
*/

@Component
@ComponentScan(basePackages = "com.example.sample")
public class CustomerService {
	
	@Autowired
	private CustomerRepository repo;


	
	
	public Iterable<Customer> findAll() {
		
		return repo.findAll();
	}

}