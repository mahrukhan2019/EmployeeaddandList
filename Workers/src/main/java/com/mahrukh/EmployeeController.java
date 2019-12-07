package com.mahrukh;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mahrukh.EmployeeDao;
import com.mahrukh.Employee;


@RestController
@CrossOrigin("*")
@RequestMapping("api")
public class EmployeeController {
	
	
	@Autowired
	EmployeeDao empDao;
	
	@GetMapping("/getAllEmployees")
	public List<Employee> getAllEmployee(){
		return empDao.findAll();
	}
	
	@GetMapping("/getEmployeebyfirstname/{firstname}")
	public List<Employee>getAEmployeeByFirst(@PathVariable("firstname")String firstname){
		return empDao.findByFirstName(firstname);
	}
	@GetMapping("/getEmployeebylastname/{lastname}")
	public List<Employee>getAEmployeeByLast(@PathVariable("lastname")String lastname){
		return empDao.findByLastName(lastname);
	}
	@GetMapping("/getEmployeebyrole/{role}")
	public List<Employee>getAEmployeeByRole(@PathVariable("role")String role){
		return empDao.findByRole(role);
	}
	
	@PostMapping("/addEmployee")
	public Employee addEmployee(@RequestBody Employee employee) {
		return empDao.save(employee);
	}

	@DeleteMapping("/DeleteEmployee/{id}")
	public void DeleteEmployee(@PathVariable("id") String id) {	
		empDao.deleteById(id);
	}
	
}
