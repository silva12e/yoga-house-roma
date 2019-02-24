import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '_debugger';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MessagesService {

  // constructor(
  //   private httpClient: HttpClient,
  //   private httpHeader: HttpHeaders
  // ) { }

  // submit(message: Message): Observable<Message> {
  //   return this.httpClient.post<Message>('http://127.0.0.1:8000/api/messages', message);
  // }
}
