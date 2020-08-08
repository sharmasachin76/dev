package com.sachin.learning.SpringAnnotation;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        
    	ApplicationContext ctx = new AnnotationConfigApplicationContext(AppConfig.class);
    	
    	Samsung a8 = ctx.getBean(Samsung.class);
    	a8.config();
    	
//    	IPhone i = ctx.getBean(IPhone.class);
//    	i.config();
    	
    }
}
