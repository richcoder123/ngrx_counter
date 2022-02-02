

import { NgModule } from '@angular/core';

import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { counterReducer } from './state/counter.reducer';
import { StoreModule } from '@ngrx/store';
import { COUNTER_STATE_NAME } from './state/counter.selectors';

const routes: Routes = [{
    path: '', component: CounterComponent
}]


@NgModule( {
    declarations: [
        CounterComponent,
        CounterOutputComponent,
        CounterButtonsComponent,
        CustomCounterInputComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer)
    ],
})

export class CounterModule {}

