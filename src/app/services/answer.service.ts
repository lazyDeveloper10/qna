import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { constant } from '../../environments/constant';
import { AnswerInterface } from '../models';

@Injectable({ providedIn: 'root' })
export class AnswerServices {
    constructor(private http: HttpClient) {
    }

    findAll(questionId: number): Observable<AnswerInterface[]> {
        return this.http.get<AnswerInterface[]>(`${constant.answerUrl}?questionId=${questionId}`);
    }

    findById(id: string): Observable<AnswerInterface> {
        return this.http.get<AnswerInterface>(`${constant.answerUrl}/${id}`);
    }

    createOne(body: AnswerInterface): Observable<AnswerInterface> {
        return this.http.post<AnswerInterface>(`${constant.answerUrl}`, body);
    }

    updateOne(id: string, body: AnswerInterface): Observable<any> {
        return this.http.put<any>(`${constant.answerUrl}/${id}`, body);
    }

    deleteOne(id: string): Observable<AnswerInterface> {
        return this.http.delete<AnswerInterface>(`${constant.answerUrl}/${id}`);
    }
}
