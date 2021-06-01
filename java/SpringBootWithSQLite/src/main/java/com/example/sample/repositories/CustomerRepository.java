package com.example.sample.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.sample.entities.Customer;

@Repository("customerRepository")
public interface CustomerRepository extends CrudRepository<Customer, Integer>{

}
