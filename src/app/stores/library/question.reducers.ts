import { QuestionReducersInterface } from '../model';

// CONSTANTS
const SET_QUESTION = 'set_question';

export const initialQuestionState = {
    question: []
}

export function question(state: QuestionReducersInterface = initialQuestionState, action: { type: any; payload: any; } | any) {
    switch (action.type) {
        case SET_QUESTION:
            return {
                ...state,
                question: action.payload
            };
        default:
            return state
    }
}

// actions
export const setQuestion = (payload: any) => ({
    type: SET_QUESTION,
    payload: payload
});
