import { ViewComponent } from './components/view/view.component';
import { Routes, RouterModule } from '@angular/router';
// import { LicenceGuard } from '@core/guards/licence.Guard';
// import { LoadingInfoComponent } from './components/loading-info/loading-info.component';
// import { LoginComponent } from './components/login/login.component';
// import { RecoverComponent } from './components/recover/recover.component';

const routes: Routes = [
  {
    path: '',
    component: ViewComponent
  }
];

export const DashboardRoutes = RouterModule.forChild(routes);
