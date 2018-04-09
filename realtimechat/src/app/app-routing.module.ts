import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { AboutTeamChatComponent } from './about-team-chat/about-team-chat.component';
const routes: Routes = [
{
  path : '',
  component : HomeComponent
},
{
  path : 'chatroom/:id',
  component : ChatroomComponent
},
{
  path : 'about-team-chat',
  component : AboutTeamChatComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}