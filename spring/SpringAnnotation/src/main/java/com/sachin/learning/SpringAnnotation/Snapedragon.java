package com.sachin.learning.SpringAnnotation;

import org.springframework.stereotype.Component;

@Component
public class Snapedragon implements MobileProcessor {

	public void process() {
		System.out.println("Snapedragon Processor");

	}

}
