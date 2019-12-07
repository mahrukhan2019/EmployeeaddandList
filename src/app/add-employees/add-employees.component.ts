import { EmployeeService } from './../employee.service';
import { Employee } from './../Employee';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {

  employee: Employee = new Employee();



  constructor(private  employeeService:EmployeeService) { }

  ngOnInit() {
  }
  save() {
    this.employeeService.create(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
  }
  onSubmit() {
    this.save();
  }


}
