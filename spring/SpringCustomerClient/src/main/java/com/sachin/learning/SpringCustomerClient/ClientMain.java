package com.sachin.learning.SpringCustomerClient;

import org.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;




public class ClientMain {
	

	public static void main(String[] args){
	
	RestTemplate template = new RestTemplate();
	HttpHeaders h = new HttpHeaders();
	String url = "http://localhost:8080/customers/1002";
	HttpEntity<String> ent = new HttpEntity<String>(h);
	ResponseEntity<String> response = template.exchange(url,HttpMethod.GET,ent,String.class);
	System.out.println(response);
	
	
	// creating customer
	
	JSONObject json = new JSONObject();
	json.put("cid", 1006);
	json.put("name", "Sud");
	json.put("city", "Dubai");
	
	
	String url2 = "http://localhost:8080/customers";
	HttpHeaders h2 = new HttpHeaders();
	h2.setContentType(MediaType.APPLICATION_JSON);
	
	HttpEntity<String> request = new HttpEntity<String>(json.toString(),h2);
	ResponseEntity<String> response2 = template.exchange(url2,HttpMethod.POST,request,String.class);
	//ResponseEntity<String> response2 = template.postForEntity(url2, request, String.class);
	
	System.out.println("=======================================");
	
	System.out.println(response2);
	
	}

}
