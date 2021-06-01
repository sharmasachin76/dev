package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>{
	
	public boolean existsByEmail(String email);
	public List<Student> findByEmail(String email);

	@Query("select max(s.id) from Student s")
	public Integer findMaxId();
}
