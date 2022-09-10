import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formInputData: any;
  data:any={};
  submitted = false;
  errors = false;
  constructor(private formBuilder: FormBuilder,
    private controller:UserService,
    private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/home');
      this.formInputData = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
  });
  }

  get validation() { return this.formInputData.controls; }

  onSubmit(){
    this.submitted = true;
    this.controller.login(this.data).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('token', res.access_token);
        this.router.navigateByUrl('/home');
      },
      err => {
          console.log(err);
      }
    );
  }
  handleError(errors:any) {
    this.errors = errors.error.error;
  }
}
