import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkflowComponent } from './workflow/workflow.component';

const routes: Routes = [
  {
    path: '',
    component: WorkflowComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'catalog',
      },

      {
        path: 'catalog',
        loadChildren: () =>
          import('./workflow/catalog/catalog.module').then(
            (mod) => mod.CatalogModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignzyKindleRoutingModule {}
