package com.school.tagore;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {
	@RequestMapping("login")
	public ModelAndView doLogin(@RequestParam ("login") String strlogin, @RequestParam ("pass") String strpass ) {
		System.out.println("In Login");
		System.out.println(strlogin);
		System.out.println(strpass);
		ModelAndView mv = new ModelAndView();
		
		mv.setViewName("login.jsp");
		mv.addObject("loginName",strlogin);
		return mv;
		
	}

}
