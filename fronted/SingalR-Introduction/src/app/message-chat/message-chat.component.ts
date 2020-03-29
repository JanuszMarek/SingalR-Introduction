import { Component, OnInit, NgZone } from '@angular/core';
import { Message } from '../models/message-model';
import { MessageRService } from '../services/message-r.service';

@Component({
  selector: 'app-message-chat',
  templateUrl: './message-chat.component.html',
  styleUrls: ['./message-chat.component.scss']
})
export class MessageChatComponent {

  txtMessage: string = '';  
  uniqueID: string = new Date().getTime().toString();  
  messages = new Array<Message>();
  message: Message;

  constructor(  
    private messageService: MessageRService,  
    private _ngZone: NgZone  
  ) {  
    this.subscribeToEvents();  
  }  

  sendMessage(): void {  
    if (this.txtMessage) {
      this.message = new Message();
      this.message.clientUniqueId = this.uniqueID;  
      this.message.type = "sent";  
      this.message.text = this.txtMessage;  
      this.message.date = new Date();  
      this.messages.push(this.message);  
      this.messageService.sendMessage(this.message);  
      this.txtMessage = '';  
    }  
  }  

  private subscribeToEvents(): void {  
    this.messageService.messageReceived.subscribe((message: Message) => {  
      this._ngZone.run(() => {  
        if (message.clientUniqueId !== this.uniqueID) {  
          message.type = "received";  
          this.messages.push(message);  
        }  
      });  
    });  
  }  
}
