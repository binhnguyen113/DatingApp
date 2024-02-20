import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Message } from '../_models/message';
import { User } from '../_models/user';
import { getPaginatedResult, getPaginationHeaders } from './paginationHelpers';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMessages(pageNumber: number, pageSize: number, container: any) {
    let params = getPaginationHeaders(pageNumber, pageSize);
    params = params.append('Container', container);
    return getPaginatedResult<Message[]>(this.baseUrl + 'messages', params, this.http);

  }
  getMessageThread(username: string) {
    return this.http.get<Message[]>(this.baseUrl + 'messages/thread/' + username);
  }
  sendMessage(username: string, content: string){
    return this.http.post<Message>(this.baseUrl + 'messages', {recipientUsername: username, content})
  }
  
  deleteMessage(id: number) {
    return this.http.delete(this.baseUrl + 'messages/' + id);
  } 

 
}
