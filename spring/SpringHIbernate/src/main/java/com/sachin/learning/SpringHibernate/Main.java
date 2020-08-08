package com.sachin.learning.SpringHibernate;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class Main {

	public static void main(String[] args) {
		System.out.println("Starting main run");
		Configuration cfg = new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass
									(Deal.class).addAnnotatedClass(Lender.class).addAnnotatedClass(Contact.class);

		SessionFactory sf = cfg.buildSessionFactory();
        Session s = sf.openSession();
	    Transaction tx = s.beginTransaction();
	    
	    Deal deal = new Deal();
	    Lender lender = new Lender();
	    Contact contact = new Contact();
	
	        
	    contact.setContact_id("dd-5001");
	    contact.setContact_name("Drw Bassini");
	    contact.setContact_email("drew.bassini@ms.com");
	    s.saveOrUpdate(contact);

	    Contact contact2 = new Contact();
	    
	    contact2.setContact_id("dd-5002");
	    contact2.setContact_name("Maggie Kindle");
	    contact2.setContact_email("Maggie.kindl@ms.com");
	    
	    s.saveOrUpdate(contact2);
	   
	    Contact contact3 = new Contact();
	    
	    contact3.setContact_id("dd-5003");
	    contact3.setContact_name("Christen");
	    contact3.setContact_email("christen@ms.com");
	    
	    s.saveOrUpdate(contact3);
	    
	    Contact contact4 = new Contact();
	    
	    contact4.setContact_id("dd-5004");
	    contact4.setContact_name("Sarah Khan");
	    contact4.setContact_email("sarah.khan@ms.com");
	    
	    s.saveOrUpdate(contact4);
	    
	    lender.setDd_firm_drid("dd-f-3001");
	    lender.setLender_name("MSBNA");
	    lender.setMs_lender_id("ms2001");

	    List<Contact> conlist = new ArrayList<Contact>();
	    
	    conlist.add(contact);
	    conlist.add(contact2);
	    conlist.add(contact3);
	    
	    List <Lender> lenlist = new ArrayList<Lender>();
	    
	    lender.setContact(conlist);
	    s.saveOrUpdate(lender);
	    
	    Lender lender2 = new Lender();
	    
	    lender2.setDd_firm_drid("dd-f-3002");
	    lender2.setLender_name("MSSFI");
	    lender2.setMs_lender_id("ms2002");

	    List<Contact> conlist2 = new ArrayList<Contact>();
	    
	    conlist2.add(contact);
	    conlist2.add(contact2);
	    conlist2.add(contact4);
	    
	    
	    
	    lender2.setContact(conlist2);
	    s.saveOrUpdate(lender2);
	    
	    lenlist.add(lender);
	    lenlist.add(lender2);
	    
	    
	       
	    deal.setMs_dealid("ms1001");
	    deal.setDd_deal_drid("dd-2001");
	    deal.setDeal_name("ABC Corp");
	    deal.setLender(lenlist);
	   
	    
	    
	    s.saveOrUpdate(deal);
	    
	/* 
	    Deal deal2 = new Deal();
	    deal2.setMs_dealid("ms1002");
	    deal2.setDd_deal_drid("dd-2002");
	    deal2.setDeal_name("XYZ Corp");
	    
	    List<Contact> conlist3 = new ArrayList<Contact>();
	    
	    conlist3.add(contact);
	    conlist3.add(contact4);
	    
	    
	    
	    List <Lender> lenlist2 = new ArrayList<Lender>();

	    //
  //Lender lender3 = new Lender();
	    
	    lender2.setDd_firm_drid("dd-f-3002");
	    lender2.setLender_name("MSSFI");
	    lender2.setMs_lender_id("ms2002");
	    
	    lender3.setContact(conlist2);

	    
	    //
	    
	    lenlist2.add(lender3);
	    
	    deal2.setLender(lenlist2);
	   
	    
	    
	    s.saveOrUpdate(deal);
	    */
	        
	        
	        tx.commit();
	        
	        System.out.println("Completed.....");
	}

}
