import {NgModule, LOCALE_ID} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {AdvantagesComponent} from './components/advantages/advantages.component';
import {ProductComponent} from './components/product/product.component';
import {ButtonEffectsDirective} from './directives/button-effects.directive';
import {TruncateTextPipe} from './pipes/truncate-text.pipe';
import {NumberFormattingPipe} from './pipes/number-formatting.pipe';
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    AdvantagesComponent,
    ProductComponent,
    ButtonEffectsDirective,
    TruncateTextPipe,
    NumberFormattingPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'ru'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
