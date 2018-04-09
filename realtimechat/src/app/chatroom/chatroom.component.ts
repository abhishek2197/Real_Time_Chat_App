import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChatService } from './chat.service';
import { Headers } from '@angular/http';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css'],
  providers: [ChatService]
})
export class ChatroomComponent implements OnInit {

  private var1: string;

    private sub: Subscription;
    user: String;
    room: String;
    messageText: String;
    messageArray: Array<{ user: String, message: String }> = [];
    constructor(private _chatService: ChatService, private route: ActivatedRoute, private http: HttpClient) {


        this._chatService.newUserJoined()
            .subscribe(data => this.messageArray.push(data));


        this._chatService.userLeftRoom()
            .subscribe(data => this.messageArray.push(data));

        this._chatService.newMessageReceived()
            .subscribe(data => this.messageArray.push(data));

        
             

    }

    ngOnInit() {
       console.log('initcalled');
        this.sub = this.route.queryParams.subscribe((params: Params) => {
            this.var1 = params['id'];
            this.room = this.var1;
            console.log(this.room);
            
            const req = this.http.post('http://localhost:3000/test/add', {name: ''+this.room}).subscribe(
                  res => {
                          console.log(res);
                         },
                  err => {
                          console.log("Error occured");
                          }
            );
          });

    }


    join() {

        this._chatService.joinRoom({ user: this.user, room: this.room });
    }

    leave() {
        this._chatService.leaveRoom({ user: this.user, room: this.room });
    }

    sendMessage() {

        this._chatService.sendMessage({ user: this.user, room: this.room, message: this.messageText });
    }

}
