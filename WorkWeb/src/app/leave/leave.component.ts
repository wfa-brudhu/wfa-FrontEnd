import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent {

  onSubmit(form: NgForm){
    console.log(form);
  }

  myScriptElement: HTMLScriptElement;
  constructor(){
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "src/assets/FormValidation.js";
    document.body.appendChild(this.myScriptElement);
  }

}
