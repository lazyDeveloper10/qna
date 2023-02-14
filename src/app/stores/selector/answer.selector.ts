import { createSelector } from '@ngrx/store';
import { AppStateInterface, AnswerReducersInterface } from '../model';

export const selectAnswerFeature = (state: AppStateInterface) => state.answer;

export const selectAnswer: any = createSelector(
    selectAnswerFeature,
    (state: AnswerReducersInterface) => state.answer
);
