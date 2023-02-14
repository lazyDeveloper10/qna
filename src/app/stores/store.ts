import { ActionReducerMap } from '@ngrx/store';
import { AppStateInterface } from './model';

import { answer, question } from './library';

export const reducers: ActionReducerMap<AppStateInterface> = {
    answer,
    question
}
