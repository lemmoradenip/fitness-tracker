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
  MatTabsModule,
  MatCardModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatCheckboxModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
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
      MatTabsModule,
      MatCardModule,
      MatSelectModule,
      MatProgressSpinnerModule,
      MatDialogModule,
      MatCheckboxModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule
    ],

    exports: [MatFormFieldModule,
      MatIconModule,
      MatButtonModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,
      MatTabsModule,
      MatCardModule,
      MatSelectModule,
      MatProgressSpinnerModule,
      MatDialogModule,
      MatCheckboxModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule
    ]
  }
)
export class MaterialModule {


}
