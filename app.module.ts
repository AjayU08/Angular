import { HomeComponent } from "./home/home.component";
import { CustomDirective } from "./custom.directive";
import { LoginComponent } from "./login/login.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SignupComponent } from "./signup/signup.component";
import { HeaderComponent } from "./header/header.component";
import { ContactComponent } from "./contact/contact.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

import { RouterModule } from "@angular/router";
import { SignupthingComponent } from "./signupthing/signupthing.component";
import { ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { GithubComponent } from "./github/github.component";

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    CustomDirective,
    ContactComponent,
    PagenotfoundComponent,
    SignupthingComponent,
    GithubComponent
  ], //all components , pipe, directives should call here
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "github", component: GithubComponent },
      { path: "signup", component: SignupComponent },
      { path: "contact", component: SignupthingComponent },
      { path: "**", component: PagenotfoundComponent } //wildcard this is for pagenot found
    ])
  ], //all angular Modules should call it in imports array
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
