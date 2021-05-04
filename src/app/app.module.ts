import { AuthGuard } from './login/auth.guard';
import { TempimgComponent } from './tempimg/tempimg.component';
import { PageComponent } from './page/page.component';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { TripcontainerComponent } from './tripcontainer/tripcontainer.component';



import { NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// matselect
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';

// fontawesome
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

// import { HttpErrorResponse } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MaincontainerComponent,
    TripcontainerComponent,
    PageComponent,
    TempimgComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    // HttpErrorResponse
    ],

  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}

