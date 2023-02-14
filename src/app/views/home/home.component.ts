import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';

import { selectQuestion } from '../../stores/selector';
import { setQuestion } from '../../stores/library';

import { QuestionInterface } from '../../models';
import { QuestionReducersInterface } from '../../stores/model';
import { QuestionServices } from '../../services';

@Component({
    selector: 'app-home-component',
    templateUrl: './home.component.html'
})
export class AppHomeComponent implements OnInit, OnDestroy {
    private ngUnsubscribe = new Subject();

    question: QuestionInterface[] = [];

    question$: Observable<QuestionInterface[]>;

    constructor(
        private questionServices: QuestionServices,
        private store: Store<{ Question: QuestionReducersInterface }>
    ) {
        this.question$ = this.store.select(selectQuestion);
        this.question$.subscribe((value: QuestionInterface[]) => {
            this.question = value;
        });
    }

    ngOnInit() {
        this.findAllQuestion();
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next(true);
        this.ngUnsubscribe.complete();
    }

    findAllQuestion() {
        this.questionServices.findAll()
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe((response: any) => {
                this.store.dispatch(setQuestion(response));
            });
    }
}
