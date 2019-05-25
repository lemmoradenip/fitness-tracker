//outsource module to manage only necessary modules
//will be added to app.module.ts
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatIconModule,MatButtonModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatSidenavModule,MatToolbarModule, MatListModule } from '@angular/material';
@NgModule(
    {
        imports: [MatFormFieldModule,MatIconModule,MatButtonModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatSidenavModule,MatToolbarModule,MatListModule],
        exports: [MatFormFieldModule,MatIconModule,MatButtonModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatSidenavModule,MatToolbarModule,MatListModule]
    }
)
export class MaterialModule {


}