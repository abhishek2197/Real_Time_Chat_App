import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  room = "";
  constructor(private router: Router) { }

  ngOnInit() {
  }
  submit(){
       
    this.router.navigateByUrl('/chatroom/?id='+this.room);
  }

}
