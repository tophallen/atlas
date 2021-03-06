import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { AppService, IState, IMenu } from '@main/app.service';
import { NotificationService } from '@shared/providers/notification.service';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';
// import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
    selector: 'atlas-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    constructor(
        private _appService: AppService,
        private _notificationService: NotificationService,
    ) { }
    // componentRef = DashboardComponent;

    @Output() sidebarToggle = new EventEmitter<void>();

    state$ = this._appService.state$;
    menu$ = this._appService.state$.pipe(
        map((state: IState) => state.menu.filter(menu => menu.urlParams[0] === state.app)),
        map((menu: IMenu[]) => menu.filter(menu => menu.urlParams.length === 2))
    );
    subMenu$ = this._appService.state$.pipe(
        filter((state: IState) => state.menuItemCurrent.hasOwnProperty('urlParams')),
        map((state: IState) => state.menu.filter(menu => menu.urlParams[0] === state.app && menu.urlParams[1] === state.menuItemCurrent.urlParams[1])),
        map((menu: IMenu[]) => menu.filter(menu => menu.urlParams.length > 2))
    );
    notifications$ = this._notificationService.notifications$;


    onSidebarToggle() {
        this.sidebarToggle.emit();
    }

    onMenuClick(menu: IMenu) {
        this._appService.actionMenu(menu.urlParams);
    }

    trackById(index: number, item: IMenu): number {
        return item.id;
    }    
}

// items = [
//   {
//     label: 'INTL', icon: 'fa-check',
//     items: [
//       [
//         {
//           label: 'Manage',
//           items: [
//             { label: 'Customer Relationships', routerLink: 'intl/manage/intl-customer_relationships' },
//             { label: 'Product Configuration', routerLink: 'intl/manage/intl-product_configuration' },
//             { label: 'Shipping', routerLink: 'intl/manage/intl-shipping' },
//             { label: 'Warehouse Picking Order', routerLink: 'intl/manage/intl-warehouse_picking_order' },
//             { label: 'Users', routerLink: 'intl/manage/intl-users' },
//             { label: 'Localization', routerLink: 'intl/manage/intl-localization' },
//             { label: 'Subscriptions', routerLink: 'intl/manage/intl-subscriptions' },
//           ]
//         },

//       ],
//       [
//         {
//           label: 'Inventory',
//           items: [
//             { label: 'Constrained Materials', routerLink: 'intl/inventory/intl-constrained' },
//             { label: 'Set Inventory', routerLink: 'intl/inventory/intl-set_inventory' },
//             { label: 'Shipping', routerLink: 'intl/inventory/intl-shipping' },
//             { label: 'Billing/Extras', routerLink: 'intl/inventory/intl-billing' },
//             { label: 'Sub To Sub', routerLink: 'intl/inventory/intl-sub_to_sub' },
//           ]
//         },

//       ],
//       [
//         {
//           label: 'Reports',
//           items: [
//             { label: 'Orders Report', routerLink: 'intl/reports/intl-orders_report' },
//             { label: 'Inventory Report', routerLink: 'intl/reports/intl-inventory_report' },
//             { label: 'Customer Relationships Report', routerLink: 'intl/reports/intl-customer_relationships_report' },
//           ]
//         }
//       ],
//     ],
//   },

//   {
//     label: 'CRM', icon: 'fa-check',
//     items: [
//       [
//         {
//           label: 'Apps',
//           items: [
//             { label: 'Contacts', routerLink: 'crm/crm-contacts' },
//             { label: 'Accounts', routerLink: 'crm/crm-accounts' },
//             { label: 'Sales Reps', routerLink: 'crm/crm-salesreps' },
//             { label: 'Apperian', routerLink: 'crm/crm-apperian' },
//             { label: 'Contract Pricing Requests', routerLink: 'crm/crm-pricing_requests' },
//             { label: 'Event Requests', routerLink: 'crm/crm-event_requests' },
//             { label: 'International Event Requests', routerLink: 'crm/crm-intl_event_requests' },
//             { label: 'Permissions', routerLink: 'crm/crm-permissions' },
//             { label: 'Configurations', routerLink: 'crm/crm-configurations' },
//           ]
//         },
//       ],
//     ],
//   },
// ];
