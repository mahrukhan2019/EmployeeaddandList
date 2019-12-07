import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';
import { Employee } from './../Employee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listofemployees',
  templateUrl: './listofemployees.component.html',
  styleUrls: ['./listofemployees.component.css']
})
export class ListofemployeesComponent implements OnInit {
  employees: Employee[];
  firstname: string;
  lastname: string;
  role: string;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  this.fetchdata();
  this.role="";

  }

  remove(id: string){
    let resp = this.employeeService.deleteEmployeebyId(id);
    resp.subscribe(
      (data)=> {
        this.employees = data;
      this.fetchdata();
      }
    
    );
  }

searchEmployeebyrole(){

 let resp = this.employeeService.getEmployeebyRole(this.titleCaseWord(this.role));
  resp.subscribe((data) =>{  
    this.employees = data});
}
searchEmployeebyfirstname(){

  let resp = this.employeeService.getEmployeebyfirstname(this.titleCaseWord(this.firstname));
   resp.subscribe((data) =>{  
     this.employees = data});
 }
 searchEmployeelastname(){

  let resp = this.employeeService.getEmployeebylastname(this.titleCaseWord(this.lastname));
   resp.subscribe((data) =>{  
     this.employees = data});
 }
  fetchdata(){
  let resp = this.employeeService.getAllEmployee();
    resp.subscribe((data)=>this.employees=data);
}
onSubmit(){
this.searchEmployeebyrole();
this.role ="";
}
onSubmit2(){
  this.searchEmployeebyfirstname();
  this.firstname ="";
  }
  onSubmit3(){
    this.searchEmployeelastname();
    this.lastname ="";
    }


titleCaseWord(word: string) {
  if (!word) return word;
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}


reset(){
  this.fetchdata();
  this.firstname="";
  this.lastname="";
  this.role="";
}
}
