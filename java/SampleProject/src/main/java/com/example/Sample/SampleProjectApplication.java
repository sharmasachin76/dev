package com.example.Sample;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class SampleProjectApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(SampleProjectApplication.class, args);
		System.out.println("Running Sample project....");
		
		Customer cus = context.getBean(Customer.class);
		Address cusAdd = context.getBean(Address.class);
		
		cusAdd.setCity("Delhi");
		cusAdd.setCountry("India");
		
		cus.setCustomerName("Amazon");
		cus.setCustomerMEI("DEL001");
		System.out.println(cus);
		
		
	}

}
