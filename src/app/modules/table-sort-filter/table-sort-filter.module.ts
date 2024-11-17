import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../utils/shared.module';
import { TableSortFilterComponent } from './table-sort-filter.component';
import { FilterBoxComponent } from './filter-box/filter-box.component';

@NgModule({
  declarations: [
    TableSortFilterComponent,
    FilterBoxComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class TableSortFilterModule {
}
