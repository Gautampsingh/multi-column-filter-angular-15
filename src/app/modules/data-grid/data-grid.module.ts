import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../utils/shared.module';
import { DataGridComponent } from './data-grid.component';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';


@NgModule({
  declarations: [
    DataGridComponent,
    FilterDialogComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class DataGridModule {
}
