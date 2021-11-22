import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { ClarityModule } from "@clr/angular";
import { ActivityPromiseResolver } from "@vcd/ui-components";
import { I18nModule, TranslationService } from "@vcd/i18n";
import { AppComponent } from "./app.component";
import translation from "@vcd/ui-components/i18n.json";
//__EXAMPLE_MODULE_IMPORT_LINE;

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule,
    I18nModule.forRoot(),
    //__EXAMPLE_NG_MODULE_IMPORTS_ENTRY
  ],

  providers: [ActivityPromiseResolver,],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(translationService: TranslationService) {
    translationService.registerTranslations(translation);
  }
}
