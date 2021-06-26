import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formAngular = new FormGroup({
    email_address: new FormControl('angular11@educacionit.com',Validators.email),
    password: new FormControl('',Validators.required),
    user_field: new FormControl('',[Validators.minLength(20),Validators.maxLength(50),Validators.required])
  });

  enviarFormulario(){
    console.log(this.formAngular.controls.email_address.touched);
  }

}
