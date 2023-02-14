import { createSelector } from '@ngrx/store';
import { AppStateInterface, QuestionReducersInterface } from '../model';

export const selectQuestionFeature = (state: AppStateInterface) => state.question;

export const selectQuestion: any = createSelector(
    selectQuestionFeature,
    (state: QuestionReducersInterface) => state.question
);
