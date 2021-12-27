import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [AppComponent, NavigationBarComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
