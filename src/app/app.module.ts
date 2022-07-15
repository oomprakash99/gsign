import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
  ],
  providers: [
    {
    provide:'SocialAuthServiceConfig',
    useValue:{
      autoLogin: false,
      providers:[
        {
          id:GoogleLoginProvider.PROVIDER_ID,
          provider :new GoogleLoginProvider('926487972380-0upkjrk44243nse5kj5o9qk44np5sl65.apps.googleusercontent.com')
        }
      ]
    }as SocialAuthServiceConfig
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
