import { Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TaskFormComponent } from './pages/task-form/task-form.component';

export const routes: Routes = [

  {
    path: '',
    component: DashboardComponent
  },

  {
    path: 'new',
    component: TaskFormComponent
  },

  {
    path: 'edit/:id',
    component: TaskFormComponent
  },

  {
    path: '**',
    redirectTo: ''
  }

];