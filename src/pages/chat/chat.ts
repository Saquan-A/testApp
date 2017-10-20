import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ConversationProvider} from '../../providers/conversation/conversation';




@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
  providers: [ConversationProvider]
})

export class ChatPage {
  public fileOutput: any[];
  userInput: string;


  constructor(public conversationProvider: ConversationProvider) {
  //  this.loadConversation();

  }

  loadConversation(){
  this.conversationProvider.load(this.userInput)
  .then(data => {
    this.fileOutput.push(data.output.text[0]);
  });

}
}
