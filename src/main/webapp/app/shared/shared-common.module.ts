import { NgModule } from '@angular/core';

import { CurrencySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [CurrencySharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [CurrencySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CurrencySharedCommonModule {}
