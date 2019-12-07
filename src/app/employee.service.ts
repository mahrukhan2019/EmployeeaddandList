import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }


  create(employee: Object): Observable<Object> {
    return this.http.post("http://localhost:8080/api/addEmployee", employee);
  }

 
  getAllEmployee(): Observable<any> {
    return this.http.get("http://localhost:8080/api/getAllEmployees");
  }

  getEmployeebyRole(role: string): Observable<any> {
    return this.http.get("http://localhost:8080/api/getEmployeebyrole/" + role);

  }
  getEmployeebyfirstname(firstname: string): Observable<any> {
    return this.http.get("http://localhost:8080/api/getEmployeebyfirstname/" + firstname);

  }
  getEmployeebylastname(lastname: string): Observable<any> {
    return this.http.get("http://localhost:8080/api/getEmployeebylastname/" + lastname);

  }

deleteEmployeebyId(id: string): Observable<any>{
return this.http.delete("http://localhost:8080/api/DeleteEmployee/" + id);
}



// create(employee: Employee){
//   return this.http.post("http://localhost:8080/api/addEmployee", employee);
// }


// getAllEmployee() {
//   return this.http.get("http://localhost:8080/api/getAllEmployees");
// }

// getEmployeebyRole(role: string) {
//   return this.http.get("http://localhost:8080/api/getEmployeebyrole/" + role);

// }
// getEmployeebyfirstname(firstname: string) {
//   return this.http.get("http://localhost:8080/api/getEmployeebyfirstname/" + firstname);

// }
// getEmployeebylastname(lastname: string) {
//   return this.http.get("http://localhost:8080/api/getEmployeebylastname/" + lastname);

// }

// DeleteEmployeebyId(id: string){
// return this.http.delete("http://localhost:8080/api/DeleteEmployee/" + id);
// }

}
