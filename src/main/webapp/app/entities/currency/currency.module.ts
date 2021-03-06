import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CurrencySharedModule } from 'app/shared';
import {
  CurrencyComponent,
  CurrencyDetailComponent,
  CurrencyUpdateComponent,
  CurrencyDeletePopupComponent,
  CurrencyDeleteDialogComponent,
  currencyRoute,
  currencyPopupRoute
} from './';

const ENTITY_STATES = [...currencyRoute, ...currencyPopupRoute];

@NgModule({
  imports: [CurrencySharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CurrencyComponent,
    CurrencyDetailComponent,
    CurrencyUpdateComponent,
    CurrencyDeleteDialogComponent,
    CurrencyDeletePopupComponent
  ],
  entryComponents: [CurrencyComponent, CurrencyUpdateComponent, CurrencyDeleteDialogComponent, CurrencyDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CurrencyCurrencyModule {}
