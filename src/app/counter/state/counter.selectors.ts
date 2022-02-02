

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IinitalState } from './counter.state';

export const COUNTER_STATE_NAME = 'counter';

const getCounterState = createFeatureSelector<IinitalState>(COUNTER_STATE_NAME);

export const getCounter = createSelector(getCounterState, (state) => {
    return state.counter;
});

export const getDeveloper = createSelector(getCounterState, (state) => {
    return state.developer;
});

