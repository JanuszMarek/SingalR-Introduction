import { Injectable, EventEmitter } from '@angular/core';
import { Message } from '../models/message-model';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class MessageRService {
  messageReceived = new EventEmitter<Message>();
  connectionEstablished = new EventEmitter<Boolean>();

  private connectionIsEstablished = false;
  private hubConnection: HubConnection;

  constructor() {
    this.createConnection();
    this.registerOnServerEvents();
    this.startConnection();
   }

  sendMessage(message: Message) {
    this.hubConnection.invoke('NewMessage', message);
  }

  private createConnection() {
    this.hubConnection = new HubConnectionBuilder()
                              .withUrl('https://localhost:5001/message')
                              .build();
  }

  private startConnection() {
    this.hubConnection.start()
      .then(() => {
        this.connectionIsEstablished = true;
        console.log('Hub connection started');
        this.connectionEstablished.emit(true);
      })
      .catch(err => {  
        console.log('Error while establishing connection, retrying...');  
        setTimeout(function () { this.startConnection(); }, 5000);  
      }); 
  }

  private registerOnServerEvents(): void {
    this.hubConnection.on('messageReceived', data => {
      this.messageReceived.emit(data);
    });
  }
}
