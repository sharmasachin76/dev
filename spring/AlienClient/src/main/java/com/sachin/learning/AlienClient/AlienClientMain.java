package com.sachin.learning.AlienClient;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

public class AlienClientMain {

	public static void main(String[] args) {
		
		System.out.println("Running Alient client main program....");
		RestTemplate restTemp = new RestTemplate();
		HttpHeaders header = new HttpHeaders();
		header.setContentType(MediaType.APPLICATION_JSON);
		String url = "http://localhost:8080/aliens/alien/1003";
		
		HttpEntity<String> request = new HttpEntity<String>(header);
		ResponseEntity<String> response = restTemp.getForEntity(url, String.class);
		//System.out.println(response.getBody());
		
		//System.out.println(response);
		
		ObjectMapper mapper = new ObjectMapper();
		
		try {
			AlienParser ap = mapper.readValue(response.getBody(),AlienParser.class);
			
			//System.out.println(ap.toString());
			
			System.out.println(ap.getName());
			
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
		

	}

}
