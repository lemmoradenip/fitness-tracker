//outsource module to manage only necessary modules
//will be added to app.module.ts
import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule
} from '@angular/material';
@NgModule(
  {
    imports: [MatFormFieldModule,
      MatIconModule,
      MatButtonModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,
      MatTabsModule],
    exports: [MatFormFieldModule,
      MatIconModule,
      MatButtonModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,
      MatTabsModule]
  }
)
export class MaterialModule {


}
