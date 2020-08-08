package com.sachin.learning.CustServ;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(collectionResourceRel="customers",path="customers")
public interface CustRepo extends JpaRepository<Customer, Integer> 
{

}
