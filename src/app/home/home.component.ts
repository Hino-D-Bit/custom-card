import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  lightTheme: boolean = true;

  ngOnInit() {
    this.lightTheme = true;
    this.changeTheme(this.lightTheme);
  }

  changeTheme(event) {
    if (event) document.documentElement.setAttribute("theme", "light");
    else document.documentElement.setAttribute("theme", "dark");
  }
}
