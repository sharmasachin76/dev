package com.example.sample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.sample.entities.Customer;
import com.example.sample.services.CustomerService;

@SpringBootApplication
public class SpringBootWithSqLiteApplication implements CommandLineRunner{

	@Autowired
	private CustomerService cs;
	
	public static void main(String[] args) {
		SpringApplication.run(SpringBootWithSqLiteApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Test Sqlite...");
		showAll();
		
	}
	
	private void showAll()
	{
		for (Customer cus: cs.findAll()) {
			System.out.println(cus);
		}
	}
}
