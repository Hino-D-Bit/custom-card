import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./app/home/home.component";
import { InfoboxComponent } from "./app/infobox/infobox.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" }, // redirect to `app-component
  { path: "home", component: HomeComponent },
  { path: "test", component: InfoboxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
