package com.school.tagore;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ViewController {
	@RequestMapping("view")
	public ModelAndView doLogin(@RequestParam ("list") String strview) {
		System.out.println("In View");
		System.out.println(strview);
		
		ModelAndView mv2 = new ModelAndView();
		
		mv2.setViewName("view.jsp");
		mv2.addObject("list",strview);
		return mv2;
		
	}

}
