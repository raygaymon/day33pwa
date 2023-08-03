import { Component, OnInit } from '@angular/core';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder){
    
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name:[null,[Validators.required, Validators.minLength(20)] ],
      email: [null, [Validators.required, Validators.email]],
      address: [null],
      bday: [null, Validators.required ],
      country: [null],
      sex: [null],
    })
  }

  processForm(form){
    alert(JSON.stringify(form.value));
  }
}
