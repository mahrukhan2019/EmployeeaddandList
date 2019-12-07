package com.mahrukh;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.mahrukh.Employee;

@Repository
public interface EmployeeDao extends MongoRepository<Employee, String> {

	@Query("{ 'firstname' : ?0 }")
	List<Employee> findByFirstName(String firstname);
	
	@Query("{ 'lastname' : ?0 }")
	List<Employee> findByLastName(String lastname);
	
	@Query("{ 'role' : ?0 }")
	List<Employee> findByRole(String role);
}
