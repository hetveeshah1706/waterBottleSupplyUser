import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from "./app.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { routingArr } from "src/app.routing";


@NgModule({
  declarations: [AppComponent, UserLoginComponent],
  imports: [
    BrowserModule,
    routingArr,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
