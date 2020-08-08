package com.test;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AlienResource {
	
	@Autowired
	AlienRepository repo;
	
	@GetMapping("aliens")
	public List<Alien> getAlien(){
		
		List<Alien> aliens = (List<Alien>) repo.findAll();
		
		return aliens;
	}
	
	@GetMapping("aliens/alien/{id}")
	public Optional<Alien> getAlien(@PathVariable int id){
				
		Optional<Alien> a1 = Optional.of(new Alien());
		a1= repo.findById(id);
		
		return a1;
	}
	
	@DeleteMapping("aliens/deleteAlien/{id}")
	public String deleteAlien(@PathVariable int id) {
	
		repo.deleteById(id);
		return "id is deleted";		
	}
	
	@PostMapping("aliens/addAlien")
	public Alien addAlien(@RequestBody Alien a) {
		repo.save(a);
		return a;
	
	}
	
	@PutMapping("aliens/updateAlien")
	public Alien updateAlien(@RequestBody Alien a) {
	
		repo.save(a);
		return a;
		
	}
	
	
	
}
