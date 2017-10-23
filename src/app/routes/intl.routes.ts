import { Routes } from '@angular/router';
import { RouteGuardService } from '../providers/route-guard.service';
import { RouteResolverService } from '../providers/route-resolver.service';
import { DashboardComponent } from '../main/dashboard/dashboard.component';
import { IFrameComponent } from '../shared/iframe/iframe.component';


export const INTL_ROUTES: Routes = [
  // FOLDER
  {
    path: 'intl',
    component: DashboardComponent,
    data: {
      description: 'atlas international',
    },
  },

  // COMPONENTS
  {
    path: 'intl/intl-home',
    component: IFrameComponent,
    canActivate: [RouteGuardService],
    resolve: { RouteResolverService },
    data: {
      isComponent: true,
      isFavorite: true,
      description: 'International Home',
      iFrameUrl: 'http://de.atlasglobal-dev.nuvasive.com/dashboard',
    },
  },
  {
    path: 'intl/intl-order',
    component: IFrameComponent,
    canActivate: [RouteGuardService],
    resolve: { RouteResolverService },
    data: {
      isComponent: true,
      isFavorite: true,
      description: 'Place an order',
      help: 'Place an order for sets to meet the requirements of the surgery you want to schedule',
      iFrameUrl: 'http://de.atlasglobal-dev.nuvasive.com/order/dashboard',
    },
  },
];
