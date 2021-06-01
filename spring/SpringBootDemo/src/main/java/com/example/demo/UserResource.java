package com.example.demo;

import java.util.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserResource {
	@RequestMapping("users")
	public List<User> getUsers(){
		List<User> users = new ArrayList<>();
		
		User u1 = new User();
		u1.setName("Sachin");
		u1.setAge(42);
		
		users.add(u1);
		
		return users;
	}

}
