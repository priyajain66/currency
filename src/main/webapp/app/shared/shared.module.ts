import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CurrencySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [CurrencySharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [CurrencySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CurrencySharedModule {
  static forRoot() {
    return {
      ngModule: CurrencySharedModule
    };
  }
}
