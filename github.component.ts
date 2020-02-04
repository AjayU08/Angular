import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-github",
  templateUrl: "./github.component.html",
  styleUrls: ["./github.component.css"]
})
export class GithubComponent implements OnInit {
  gitUsers = [];
  public GitApiUrl = "https://api.github.com/users";
  constructor(private http: HttpClient) {
    this.http.get<any>(this.GitApiUrl).subscribe(data => {
      let dataone = (this.gitUsers = data);
      console.log(dataone);
    });
  }

  ngOnInit() {}
}
