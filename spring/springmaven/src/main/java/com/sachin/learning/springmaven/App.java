package com.sachin.learning.springmaven;


import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App 
{
	
    public static void main( String[] args )
    {
       
    	
    	ApplicationContext ctx = new ClassPathXmlApplicationContext("config.xml");
      	Vehicle obj = (Vehicle) ctx.getBean("car",Car.class);
      	obj.drive();
      	
      	Vehicle obj2 = (Vehicle) ctx.getBean("bike");
      	obj2.drive();
      	
      	Tyre tyre = (Tyre)ctx.getBean("tyre");
      	System.out.println(tyre);
    }
}
