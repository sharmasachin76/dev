package SpringGradle;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

/**
 * Hello world!
 *
 */
public class HibTestMain 
{
    public static void main( String[] args )
    {
        Contact c = new Contact();
        c.setId(1004);
        c.setName("Sanvi");
        c.setEmail("sharmasanvi@gmail.com");
        
        System.out.println("Creating Contact object");
        
        Configuration cfg = new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Contact.class);
        
        SessionFactory sf = cfg.buildSessionFactory();
        
        Session s = sf.openSession();
       // Contact c2;//= new Contact();
        
        Transaction tx = s.beginTransaction();
        
      //  s.save(c);
       // s.delete(c);
   //   s.saveOrUpdate(c);
    //    c2 = s.get(Contact.class, 1001);
        
        Query qry = s.createQuery("from Contact");
        
        List<Contact> contacts = qry.list();
        
        for(Contact c1: contacts) {
        	System.out.println(c1);
        }
        
 qry = s.createQuery("from Contact where name like 's%'");
        
        List<Contact> contacts2 = qry.list();
        
        for(Contact c1: contacts2) {
        	System.out.println(c1);
        }
        
qry = s.createSQLQuery(" select email from contact where name ='Sachin' ");
        
        	String email = (String)qry.uniqueResult();
        
        System.out.println(email);
        	
        
        qry = s.createSQLQuery(" select email from contact ");
                
                	List<String> emails = (List<String>)qry.list();
                
                for(String ss: emails) {
                	System.out.println(ss);
                }
               
        
        
        
        tx.commit();
        
      // System.out.println("Object persisted and hibernated");
     //   System.out.println(c2.toString());
        
        
        
        
    }
}
