import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
//__EXAMPLE_MODULE_IMPORT_LINE;

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule,
    //__EXAMPLE_NG_MODULE_IMPORTS_ENTRY
  ],

  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
