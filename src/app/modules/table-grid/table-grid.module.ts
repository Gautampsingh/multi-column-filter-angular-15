import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../utils/shared.module';
import { TableGridComponent } from './table-grid.component';
import { FilterBoxComponent } from './filter-box/filter-box.component';

@NgModule({
  declarations: [
    TableGridComponent,
    FilterBoxComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class TableGridModule {
}
