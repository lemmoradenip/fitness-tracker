import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { TrainingService } from './training/training.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { UIService } from './shared/ui.service';
import {StoreModule} from '@ngrx/store';
import { appReducer} from './app.reducer';
// import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule, // outsource material imports modules
    FlexLayoutModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'fitness-tracker'), // imports firebase/app needed for everything
    // SharedModule,
    AuthModule,
    StoreModule.forRoot({ui: appReducer})

  ],
  providers: [AuthService, TrainingService, UIService],
  bootstrap: [AppComponent],
  // entryComponents: [StopTrainingComponent] // angular be prepare to use it
})
export class AppModule { }
