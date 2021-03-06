import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CurrencySharedModule } from 'app/shared';
import {
  CurrencyExchangeRateComponent,
  CurrencyExchangeRateDetailComponent,
  CurrencyExchangeRateUpdateComponent,
  CurrencyExchangeRateDeletePopupComponent,
  CurrencyExchangeRateDeleteDialogComponent,
  currencyExchangeRateRoute,
  currencyExchangeRatePopupRoute
} from './';

const ENTITY_STATES = [...currencyExchangeRateRoute, ...currencyExchangeRatePopupRoute];

@NgModule({
  imports: [CurrencySharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CurrencyExchangeRateComponent,
    CurrencyExchangeRateDetailComponent,
    CurrencyExchangeRateUpdateComponent,
    CurrencyExchangeRateDeleteDialogComponent,
    CurrencyExchangeRateDeletePopupComponent
  ],
  entryComponents: [
    CurrencyExchangeRateComponent,
    CurrencyExchangeRateUpdateComponent,
    CurrencyExchangeRateDeleteDialogComponent,
    CurrencyExchangeRateDeletePopupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CurrencyCurrencyExchangeRateModule {}
