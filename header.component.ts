import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header", //component name
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  color = "any";
  constructor() {}

  ngOnInit() {}
}
