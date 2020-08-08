package com.sachin.learning.SpringHibernate;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class LIQMain {

	public static void main(String[] args) {
		System.out.println("Starting liq main run");
		Configuration cfg = new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass
									(Deal.class).addAnnotatedClass(Lender.class).addAnnotatedClass(Contact.class).addAnnotatedClass
											(DealLenderContact.class);

		SessionFactory sf = cfg.buildSessionFactory();
        Session s = sf.openSession();
	    Transaction tx = s.beginTransaction();
	    
	    Deal deal = new Deal();
	    Lender lender = new Lender();
	    Contact contact = new Contact();
	
	    DealLenderContact dealLenderContactLinks = new DealLenderContact();
	    
	    
	    
	    deal.setDd_deal_drid("dd-d-1001");
	    deal.setDeal_name("ABC Corp");
	    deal.setMs_dealid("ms-d-1001");

	    lender.setDd_firm_drid("dd-f-2001");
	    lender.setMs_lender_id("ms-c-2001");
	    lender.setLender_name("MSBNA");
	    
	    contact.setContact_id("3001");
	    contact.setContact_name("Drew Bassini");
	    contact.setContact_email("d.b@ms");
	    
	    dealLenderContactLinks.setContact(contact);
	    dealLenderContactLinks.setLender(lender);
	    dealLenderContactLinks.setDeal(deal);
	    
	    s.saveOrUpdate(deal);
	    s.saveOrUpdate(lender);
	    s.saveOrUpdate(contact);
	    s.saveOrUpdate(dealLenderContactLinks);
	    
	    
	    tx.commit();
	    System.out.println("Completed.....");
	}

}
