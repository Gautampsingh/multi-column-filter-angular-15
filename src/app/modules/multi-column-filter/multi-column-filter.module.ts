import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../utils/shared.module';
import { MultiColumnFilterComponent } from './multi-column-filter.component';
import { FilterColumnComponent } from './filter-column/filter-column.component';

@NgModule({
  declarations: [
    MultiColumnFilterComponent,
    FilterColumnComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class MultiColumnFilterModule {
}
