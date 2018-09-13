import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

export const AppRouterModule = RouterModule.forRoot(routes);
