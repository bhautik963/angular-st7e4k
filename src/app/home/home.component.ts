import { Component, OnInit } from '@angular/core';
import {student} from '../shared/student';
import {stud} from '../shared/stud';
import {  Router  } from '@angular/router';  

//import{stud} from '../shared/stud';
import { StudServiceService } from './../stud-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  students : stud[];
  Repdata;
  id;
  constructor(private studservice: StudServiceService,private router: Router){
    
  }
  ngOnInit(): void {
  this.studservice.GetUser().subscribe(data =>  this.Repdata = data)  
    console.log(this.Repdata);
  }
  
  edituser(Stud:stud): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", Stud.id.toString());
    this.router.navigate(['contect']);
  };
}
