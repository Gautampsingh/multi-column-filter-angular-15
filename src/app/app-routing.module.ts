import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataGridComponent } from './modules/data-grid/data-grid.component';
import { TableGridComponent } from './modules/table-grid/table-grid.component';
import { TableSortFilterComponent } from './modules/table-sort-filter/table-sort-filter.component';
import { DateTimeDropdownComponent } from './modules/datetime-dropdown/datetime-dropdown.component';
import { DateTimeValidationComponent } from './modules/datetime-validation/datetime-validation.component';
import { MultiColumnFilterComponent } from './modules/multi-column-filter/multi-column-filter.component';

const routes: Routes = [
  {
    path: '',
    component: DataGridComponent,
    children: [
      {
        path: 'DataGridComponent',
        loadChildren: () => import('./modules/data-grid/data-grid.module').then(m => m.DataGridModule)
      },
    ]
  },
  {
    path: 'table-grid',
    component: TableGridComponent,
    children: [
      {
        path: 'TableGridComponent',
        loadChildren: () => import('./modules/table-grid/table-grid.module').then(m => m.TableGridModule)
      },
    ]
  },
  {
    path: 'table-sort-filter',
    component: TableSortFilterComponent,
    children: [
      {
        path: 'TableSortFilterComponent',
        loadChildren: () => import('./modules/table-sort-filter/table-sort-filter.module').then(m => m.TableSortFilterModule)
      },
    ]
  },
  {
    path: 'datetime-dropdown',
    component: DateTimeDropdownComponent,
    children: [
      {
        path: 'DateTimeDropdownComponent',
        loadChildren: () => import('./modules/datetime-dropdown/datetime-dropdown.module').then(m => m.DateTimeDropdownModule)
      },
    ]
  },
  {
    path: 'datetime-validation',
    component: DateTimeValidationComponent,
    children: [
      {
        path: 'DateTimeValidationComponent',
        loadChildren: () => import('./modules/datetime-validation/datetime-validation.module').then(m => m.DateTimeValidationModule)
      },
    ]
  },
  {
    path: 'multi-column-filter',
    component: MultiColumnFilterComponent,
    children: [
      {
        path: 'MultiColumnFilterComponent',
        loadChildren: () => import('./modules/multi-column-filter/multi-column-filter.module').then(m => m.MultiColumnFilterModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
