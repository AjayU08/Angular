import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-signupthing",
  templateUrl: "./signupthing.component.html",
  styleUrls: ["./signupthing.component.css"]
})
export class SignupthingComponent implements OnInit {
  email = new FormControl("");
  name = new FormControl("");
  phone = new FormControl("");
  // updateEmail() {
  //   this.name.setValue("Ajay");
  //   this.phone.setValue("8892664454");
  //   this.email.setValue("ajaygowda@gmail.comail");
  // }
  updateEmail() {
    console.log(this.name.value);
    console.log(this.phone.value);
    console.log(this.email.value);
  }
  // getFormData(name) {
  //   console.log(name);
  // }

  constructor() {}

  ngOnInit() {}
}
