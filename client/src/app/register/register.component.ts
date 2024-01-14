import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    @Output() cancelRegister = new EventEmitter();
    registerForm!: FormGroup;
    maxDate: Date = new Date();
    validationErrors: string[]= [];

    constructor(private accountService: AccountService, private toastr: ToastrService, 
      private fb: FormBuilder, private router: Router) { }

    ngOnInit(): void {
      this.intitializeForm();
      this.maxDate = new Date();
      this.maxDate.setFullYear(this.maxDate.getFullYear() -18);
    }

    intitializeForm(){
      this.registerForm = this.fb.group({
        gender: ['male'],
        username: ['', Validators.required],
        knownAs: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
        password: ['',[Validators.required,
        Validators.minLength(4), Validators.maxLength(8)]],
        confirmPassword:[ '', [Validators.required, this.matchValues('password')]]
      })
    }
      
    matchValues(matchTo: any): ValidatorFn {
      return (control: AbstractControl) => {
        let con = control?.parent?.controls as any;
        if(con)
          return control?.value === con[matchTo].value ? null : {isMatching: true};
        else return null;
      }
    }

    register() {
      this.accountService.register(this.registerForm.value).subscribe(
        response =>{
        this.router.navigateByUrl('\members');
      }, 
      error =>{
        this.validationErrors = error;
      })
    }
      

    cancel() {
      this.cancelRegister.emit(false);
    }

}
