import { Routes } from '@angular/router';
import { DashboardComponent } from '@main/dashboard/dashboard.component';
import { IFrameComponent } from '@shared/components/iframe/iframe.component';
import { RouteGuardService } from './route-guard.service';

export const INTL_MANAGE_ROUTES: Routes = [
    // FOLDER
    {
        path: 'intl/manage',
        component: DashboardComponent,
        canActivate: [RouteGuardService],
        data: {
            description: 'Manage'
        }
    },

    // COMPONENTS
    {
        path: 'intl/manage/intl-users-native',
        loadChildren: '../lazyModules/intl/manage/users/users.module#UsersModule',
        canActivate: [RouteGuardService],
        data: {
            isComponent: true,
            description: 'Users (Native)'
        }
    },
    {
        path: 'intl/manage/intl-customer_relationships',
        component: IFrameComponent,
        canActivate: [RouteGuardService],
        data: {
            isComponent: true,
            description: 'Customer Relationships',
            iFrameUrl: 'http://{{country}}.atlasglobal-dev.nuvasive.com/contact/customers/manage'
        }
    },
    {
        path: 'intl/manage/intl-product_configuration',
        component: IFrameComponent,
        canActivate: [RouteGuardService],
        data: {
            isComponent: true,
            description: 'Product Configuration',
            iFrameUrl: 'http://{{country}}.atlasglobal-dev.nuvasive.com/configurator'
        }
    },
    {
        path: 'intl/manage/intl-shipping',
        component: IFrameComponent,
        canActivate: [RouteGuardService],
        data: {
            isComponent: true,
            description: 'Shipping',
            iFrameUrl: 'http://{{country}}.atlasglobal-dev.nuvasive.com/shippingzones'
        }
    },
    {
        path: 'intl/manage/intl-warehouse_picking_order',
        component: IFrameComponent,
        canActivate: [RouteGuardService],
        data: {
            isComponent: true,
            description: 'Warehouse Picking Order',
            iFrameUrl: 'http://{{country}}.atlasglobal-dev.nuvasive.com/inventory/warehouse/pickorder/manage'
        }
    },
    {
        path: 'intl/manage/intl-users',
        component: IFrameComponent,
        canActivate: [RouteGuardService],
        data: {
            isComponent: true,
            description: 'Users',
            iFrameUrl: 'http://{{country}}.atlasglobal-dev.nuvasive.com/user/manage'
        }
    },
    {
        path: 'intl/manage/intl-localization',
        component: IFrameComponent,
        canActivate: [RouteGuardService],
        data: {
            isComponent: true,
            description: 'Localization',
            iFrameUrl: 'http://{{country}}.atlasglobal-dev.nuvasive.com/translation/manage'
        }
    },
    {
        path: 'intl/manage/intl-subscriptions',
        component: IFrameComponent,
        canActivate: [RouteGuardService],
        data: {
            isComponent: true,
            description: 'Subscriptions',
            iFrameUrl: 'http://{{country}}.atlasglobal-dev.nuvasive.com/user/subscription'
        }
    }
];
