import { Component, Input } from '@angular/core';

import { SharedBaseModule } from '../../shared'
import { AnswerInterface, QuestionInterface } from '../../models';

@Component({
    standalone: true,
    selector: 'app-answer-card-component',
    inputs: [
        'answer',
    ],
    outputs: [],
    imports: [ SharedBaseModule ],
    template: `
        <div class="row p-3">
            <div class="vote-container col-1">
                {{ answer.vote}}
            </div>

            <div class="qna-wrapper col-11">
                <div [innerHTML]="answer.answer">{{ answer.answer }}</div>

                <div class="qna-wrapper-info">
                    {{ answer.fullName }} - {{ answer.createdAt | date }}
                </div>
            </div>
        </div>
    `,
    styleUrls: [ './qna-card.component.scss' ]
})
export class AppAnswerCardComponent {
    @Input() answer!: AnswerInterface;
}
