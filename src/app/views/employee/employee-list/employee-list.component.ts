import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { v4 as uuidv4 } from 'uuid';
// import  numWords from 'num-words';
// import {numWords} from 'number-to-words';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  objList: Employee[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= 100; i++) {
      this.createFakeData("Employee" + i, " " + i, "G1");
    }
    console.log(this.objList);

  }

  createFakeData(fname: string, lname: string, group: string) {
    let a = new Employee();
    a.id = uuidv4();
    a.basicSalary = 4000000;
    a.birthDate = new Date("1991-01-01");
    a.description = new Date();
    a.email = fname + "@office.com";
    a.firstName = fname;
    a.group = group;
    a.lastName = lname;
    a.status = "Active";
    a.username = fname + "." + group;
    this.objList.push(a);
  }
}
