import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LoginComponent } from '../login.component';
import { AppService } from '@main/app.service';
import { LoadingService } from '@shared/providers/loading.service';
import { LocalStorageService } from '@shared/providers/local-storage.service';
// import { Observable } from 'rxjs/Observable';
// import { environment } from '@env';


@Component({
    selector: 'atlas-re-login',
    templateUrl: './re-login.component.html',
    styleUrls: ['./re-login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReLoginComponent extends LoginComponent {
    constructor(
        _appService: AppService,
        _loadingService: LoadingService,
        _localStorageService: LocalStorageService,
    ) {
        super(_appService, _loadingService, _localStorageService);
    }

    // reLoginPrompt$ = this._appService.state$.switchMap((state: IState) => {
    //     if (!state.isLoggedIn) {
    //         return Observable.of(false);
    //     }
    //     if (state.action.type === ACTION.LOGIN) {
    //         return Observable.of(false);
    //     } else {
    //         return Observable.of(true).delay((state.user.expires - state.action.date) * 1000);
    //     }
    // });

    // timeToSessionExpiration$ = Observable.interval(1000)
    //     .map(second => second * 100 / (environment.MINUTES_OF_BEFORE_RELOGIN * 60))
    //     .take(environment.MINUTES_OF_BEFORE_RELOGIN * 60);

    logIn() {
        super.logIn();
    }

    logOut() {
        this._appService.actionLogOut();
    }
}
