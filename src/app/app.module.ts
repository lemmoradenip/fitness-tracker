import { AuthService } from './auth/auth.service';
import { TrainingService } from './training/training.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';

import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponentComponent } from './training/current-training-component/current-training-component.component';
import { NewTrainingComponentComponent } from './training/new-training-component/new-training-component.component';
import { PastTrainingComponentComponent } from './training/past-training-component/past-training-component.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StopTrainingComponent } from './training/current-training-component/stop-training.components';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponentComponent,
    NewTrainingComponentComponent,
    PastTrainingComponentComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTrainingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,//outsource material imports
    FlexLayoutModule,
    FormsModule
  ],
  providers: [AuthService, TrainingService ],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent]//angular be prepare to use it
})
export class AppModule { }
