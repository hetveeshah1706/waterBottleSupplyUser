import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDataService } from './login-data.service';
import { user_class } from './user_class';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private _loginData:LoginDataService,private _router:Router) { }

  ngOnInit() {
    this.loginForm=new FormGroup({
      user_email:new FormControl('parth123@gmail.com',[Validators.required,Validators.email]),
      user_password:new FormControl('parth@123',[Validators.required])
    });
  }
  onLogin(){
    if(this.loginForm.get('user_email').value!=null){
    this._loginData.login(this.loginForm.value).subscribe(
      (x:user_class[])=>{
        if(x.length==1){
          localStorage.setItem('user_email',this.loginForm.get('user_email').value);
          this._router.navigate(['/nav']);
        }
        else{
          alert('invalid');
        }
      }
    );
  }
  else{
    alert('uname or password must not be empty');
  }
  }
}
