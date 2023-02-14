import { QuestionReducersInterface } from './question-reducer.model';
import { AnswerReducersInterface } from './answer-reducer.model';

export interface AppStateInterface {
    question: QuestionReducersInterface;
    answer: AnswerReducersInterface
}
