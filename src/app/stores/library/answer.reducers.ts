import { AnswerReducersInterface } from '../model';

// CONSTANTS
const SET_ANSWER = 'set_answer';

export const initialAnswerState = {
    answer: []
}

export function answer(state: AnswerReducersInterface = initialAnswerState, action: { type: any; payload: any; } | any) {
    switch (action.type) {
        case SET_ANSWER:
            return {
                ...state,
                answer: action.payload
            };
        default:
            return state
    }
}

// actions
export const setAnswer = (payload: any) => ({
    type: SET_ANSWER,
    payload: payload
});
