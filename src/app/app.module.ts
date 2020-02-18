import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { router } from './router.conf';

// Components
import { PublicComponent } from './ejercicio/public/public.component';
import { PublicChildComponent } from './ejercicio/public-child/public-child.component';
import { AuthService } from './ejercicio/auth.service';


@NgModule({
  imports: [
    BrowserModule, 
    RouterModule.forRoot(router)
  ],
  declarations: [
    AppComponent, 
    HelloComponent,
    PublicComponent,
    PublicChildComponent
  ],
  bootstrap: [AppComponent],
  providers: [AuthService]
})
export class AppModule {}
