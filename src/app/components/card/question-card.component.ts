import { Component, Input } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

import { SharedBaseModule } from '../../shared'
import { QuestionInterface } from '../../models';

@Component({
    standalone: true,
    selector: 'app-question-card-component',
    inputs: [
        'question',
        'questionDetail'
    ],
    outputs: [],
    imports: [ SharedBaseModule, RouterLinkWithHref ],
    template: `
        <div class="row p-3">
            <div class="vote-container col-1">
                {{ question.vote}}
            </div>

            <div class="qna-wrapper col-11">
                <a *ngIf="!questionDetail; else detail" class="nav-link" [routerLink]="['/qna', question.id]">
                    <h5>{{ question.questionTitle }}</h5>
                    <div class="question-body" [innerHTML]="question.question"></div>

                    <div class="qna-wrapper-info">
                        {{ question.fullName }} - {{ question.createdAt | date }}
                    </div>
                </a>

                <ng-template #detail>
                    <h5>{{ question.questionTitle }}</h5>
                    <div [innerHTML]="question.question"></div>

                    <div class="qna-wrapper-info">
                        {{ question.fullName }} - {{ question.createdAt | date }}
                    </div>
                </ng-template>
            </div>
        </div>
    `,
    styleUrls: [ './qna-card.component.scss' ]
})
export class AppQuestionCardComponent {
    @Input() question!: QuestionInterface;
    @Input() questionDetail: boolean = false;
}
