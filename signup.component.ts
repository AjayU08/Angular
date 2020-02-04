import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-signup", //component directives
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  hideOrShowEmp: Boolean = false;
  buttonStatus = "Show Table";

  ToggleTable() {
    this.hideOrShowEmp = !this.hideOrShowEmp;
    if (this.hideOrShowEmp) {
      this.buttonStatus = "Hide Table💯";
    } else {
      this.buttonStatus = "Show Table😄";
    }
  }
  public employeeInfomation: any[] = [
    {
      empid: 1,
      name: "manu",
      age: 20,
      company: "Capgemini",
      salary: 30000,
      designation: "Nodejs Developer",
      gender: "male",
      education: "BE",
      location: "Bangalore",
      doj: new Date("10/10/2017"),
      skills: ["java", "j2ee", "spring", "html", "css", "javascript", "angular"]
    },
    {
      empid: 2,
      name: "manu",
      age: 20,
      company: "Capgemini",
      salary: 30000,
      designation: "Nodejs Developer",
      gender: "male",
      education: "BE",
      location: "Bangalore",
      doj: new Date("10/10/2017"),
      skills: ["java", "j2ee", "spring", "html", "css", "javascript", "angular"]
    },
    {
      empid: 3,
      name: "anu",
      age: 31,
      company: "Infosys",
      salary: 20000,
      designation: "java Developer",
      gender: "female",
      education: "BTECH",
      location: "Mysore",
      doj: new Date("10/10/2015"),
      skills: [
        "java",
        "j2ee",
        "spring",
        "react",
        "nodejs",
        "javascript",
        "angular"
      ]
    },
    {
      empid: 4,
      name: "arun",
      age: 22,
      company: "CGI",
      salary: 330000,
      designation: "fullstack Developer",
      gender: "male",
      education: "BE",
      location: "Mandya",
      doj: new Date("10/10/2016"),
      skills: [
        "java",
        "j2ee",
        "spring",
        "fullstack",
        "html",
        "css",
        "javascript",
        "angular"
      ]
    },
    {
      empid: 5,
      name: "keerthi",
      age: 24,
      company: "Testyantra",
      salary: 320000,
      designation: "React Developer",
      gender: "female",
      education: "BCA",
      location: "Bangalore",
      doj: new Date("10/10/2016"),
      skills: ["java", "j2ee", "spring", "html", "css", "javascript", "angular"]
    }
  ];

  addNewEmployee = {
    empid: 6,
    name: "penga",
    age: 26,
    company: "CGI",
    salary: 320000,
    designation: "Java Developer",
    gender: "male",
    education: "BE",
    location: "Bangalore",
    doj: new Date("10/10/2016"),
    skills: ["java", "j2ee", "spring", "html", "css", "javascript", "angular"]
  };

  addEmployee() {
    this.employeeInfomation.push(this.addNewEmployee);
  }
  removeEmp(emp) {
    let index = this.employeeInfomation.indexOf(emp);
    this.employeeInfomation.splice(index, 1);
  }
  constructor() {}
  ngOnInit() {}
}
