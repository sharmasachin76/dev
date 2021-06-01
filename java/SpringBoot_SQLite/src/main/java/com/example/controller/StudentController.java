package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Student;
import com.example.service.StudentService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

	@Autowired
	private StudentService studentService;
	
	@RequestMapping(value="info",method = RequestMethod.GET)
	public String info() {
		return "The service is running";
	}
	
	@RequestMapping(value="createStudent", method=RequestMethod.POST)
	public String createStudent(@RequestBody Student student) {
		return studentService.createStudent(student);
	}
	
	@RequestMapping(value="students", method=RequestMethod.GET)
	public List<Student> readStudent() {
		return studentService.readStudents();
	}
	
//	@RequestMapping(value="deleteStudent", method=RequestMethod.DELETE)
//	public List<Student> deleteStudent() {
//		return studentService.deleteStudent();
//	}
	
	
}
