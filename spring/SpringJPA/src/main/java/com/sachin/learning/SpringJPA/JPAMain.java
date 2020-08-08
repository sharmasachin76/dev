package com.sachin.learning.SpringJPA;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 * Hello world!
 *
 */
public class JPAMain 
{
    public static void main( String[] args )
    {
        System.out.println( "JPA Test..." );
        
        
        EntityManagerFactory ef = Persistence.createEntityManagerFactory("mysqlPu");
        EntityManager em =  ef.createEntityManager();
        
        Contact con = em.find(Contact.class, 1001);
        
        
        System.out.println(con);
        
    }
}
