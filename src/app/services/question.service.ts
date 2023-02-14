import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { constant } from '../../environments/constant';
import { AnswerInterface } from '../models';

@Injectable({ providedIn: 'root' })
export class QuestionServices {
    constructor(private http: HttpClient) {
    }

    findAll(): Observable<any> {
        return this.http.get<any>(`${constant.questionUrl}`);
    }

    findById(id: number): Observable<any> {
        return this.http.get<any>(`${constant.questionUrl}/${id}`);
    }

    createOne(body: AnswerInterface): Observable<any> {
        return this.http.post<any>(`${constant.questionUrl}`, body);
    }

    updateOne(id: string, body: AnswerInterface): Observable<any> {
        return this.http.put<any>(`${constant.questionUrl}/${id}`, body);
    }

    deleteOne(id: string): Observable<any> {
        return this.http.delete<any>(`${constant.questionUrl}/${id}`);
    }
}
