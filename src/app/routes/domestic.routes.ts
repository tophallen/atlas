import { Routes } from '@angular/router';
import { RouteGuardService } from '../providers/route-guard.service';
import { RouteResolverService } from '../providers/route-resolver.service';
import { DashboardComponent } from '../main/dashboard/dashboard.component';


export const DOMESTIC_ROUTES: Routes = [
  // FOLDER
  {
    path: 'domestic',
    component: DashboardComponent,
    data: {
      description: 'Atlas Domestic',
    }
  },

  // COMPONENTS
  {
    path: 'domestic/domestic-unvalidated',
    loadChildren: '../lazyModules/iframe/iframe.module#IFrameModule',
    data: {
      isComponent: true,
      description: 'Unvalidated Orders',
      iFrameUrl: 'http://sdaccdv01/Orders/Order/Unvalidated'
    },
  },
];