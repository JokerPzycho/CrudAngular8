import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  employeArray: Employee[] = [
    {id: 1, name: "Ryan", country: "USA"},
    {id: 2, name: "Angelica", country: "Brasil"},
    {id: 3, name: "Joe", country: "Uruguay"},
  ];

  selectEmployee: Employee = new Employee();

  addOrEdit(){
    if (this.selectEmployee.id == 0) {
      this.selectEmployee.id = this.employeArray.length + 1;
      this.employeArray.push(this.selectEmployee);
    }
    this.selectEmployee = new Employee();
  }

  openForEdit(employee: Employee){
    this.selectEmployee = employee;
  }

  Delete(){
    if (confirm('¿ Seguro lo quieres eliminar ?')) {
      this.employeArray = this.employeArray.filter(x => x != this.selectEmployee);
      this.selectEmployee = new Employee();
    }
  }
}
