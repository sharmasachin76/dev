package com.sachin.learning.RestClient;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

public class Main {

	
	public static void main(String[] args){
	
	RestTemplate template = new RestTemplate();
	HttpHeaders h = new HttpHeaders();
	String url = "http://localhost:8080/aliens";
	HttpEntity<String> ent = new HttpEntity<String>(h);
	ResponseEntity<String> response = template.exchange(url,HttpMethod.GET,ent,String.class);
	
	System.out.println(response);
	
	}
}
	
	

