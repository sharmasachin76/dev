package com.example.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.entity.Deal;

@RepositoryRestResource(collectionResourceRel = "deal",path="deal")
public interface DealRepo extends JpaRepository<Deal, Integer>{

}
