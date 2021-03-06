import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '@main/app.module';
import { environment } from '@env';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
    // .then(ref => {
    //     // Ensure Angular destroys itself on hot reloads.
    //     // const ngRef = 'ngRef';
    //     // window[ngRef] ? window[ngRef].destroy() : (window[ngRef] = ref);
    // })
    // .catch(err => console.log(err));
