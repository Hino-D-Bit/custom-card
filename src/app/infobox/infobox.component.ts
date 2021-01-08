import { Component, OnInit } from "@angular/core";
import { HomeComponent } from "../home/home.component";

@Component({
  selector: "app-infobox",
  templateUrl: "./infobox.component.html",
  styleUrls: ["./infobox.component.scss"]
})
export class InfoboxComponent implements OnInit {
  lightTheme: boolean;

  constructor(private homeComponent: HomeComponent) {}

  ngOnInit() {
    this.lightTheme = this.homeComponent.lightTheme;
  }

  changeTheme(event) {
    this.homeComponent.changeTheme(event);
  }
}
