import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';

import { selectAnswer, selectQuestion } from '../../stores/selector';
import { setQuestion, setAnswer, question } from '../../stores/library';

import { AnswerInterface, QuestionInterface } from '../../models';
import { AnswerReducersInterface } from '../../stores/model';
import { AnswerServices, QuestionServices } from '../../services';

@Component({
    selector: 'app-qna-component',
    templateUrl: './qna.component.html',
    styleUrls: [ 'qna.component.scss' ]
})
export class AppQnaComponent implements OnInit, OnDestroy {
    private ngUnsubscribe = new Subject()

    id?: number;

    question: QuestionInterface = {};
    answer: AnswerInterface[] = [];

    answer$: Observable<AnswerInterface[]>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private questionServices: QuestionServices,
        private answerServices: AnswerServices,
        private store: Store<{ Question: AnswerReducersInterface }>
    ) {
        this.answer$ = this.store.select(selectAnswer);
        this.answer$.subscribe((value: AnswerInterface[]) => {
            this.answer = value;
        });
    }

    ngOnInit() {
        this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

        this.questionServices.findById(this.id)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe((response: any) => {
                this.question = response;
                this.findAllAnswer();
            });
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next(true);
        this.ngUnsubscribe.complete();
    }

    findAllAnswer() {
        this.answerServices.findAll(this.id!)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe((response: AnswerInterface[]) => {
                this.store.dispatch(setAnswer(response));
            })
    }
}
