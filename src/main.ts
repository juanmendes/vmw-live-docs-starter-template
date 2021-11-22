import "./polyfills";

import { enableProdMode, LOCALE_ID } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

platformBrowserDynamic([
  {
    provide: LOCALE_ID,
    useValue: navigator.language
  }
])
  .bootstrapModule(AppModule)
  .then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window["ngRef"]) {
      window["ngRef"].destroy();
    }
    window["ngRef"] = ref;

    // Otherwise, log the boot error
  })
  .catch(err => console.error(err));
