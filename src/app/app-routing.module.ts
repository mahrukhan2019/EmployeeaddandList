import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { ListofemployeesComponent } from './listofemployees/listofemployees.component';


const routes: Routes = [
  { path: '', redirectTo: "employees" ,pathMatch: "full"},

  { path: 'addEmployee', component: AddEmployeesComponent },
  { path: 'employees', component: ListofemployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
