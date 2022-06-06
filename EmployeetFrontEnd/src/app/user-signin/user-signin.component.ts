import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import { LoginService } from '../login.service';
import { MessageService } from '../service/message.service';
@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {

  loginForm:FormGroup;
  logindata: any;

  constructor(private loginService:LoginService,
              // private toasterService:ToastrService,
              private formBuilder:FormBuilder,
              private router : Router,
              private _user : UserService,
              private messageService:MessageService )
               { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      userPassword: ['',[Validators.required]]

    });
  }

  onSubmit(){
    //  debugger;
    if(this.loginForm.valid){
      this.logindata=this.loginForm.value;
      // if(this.logindata.email=="sagar@gmail.com" && this.logindata.password=="123"){
      //   this.toasterService.success("Login Successfully");
      // }
      // else{
      //   this.toasterService.warning("login Failed");
      // }
      this.loginService.postLogin(this.logindata).subscribe(
        (data)=>{
          if(data!=null){
              this.logindata=data;
              console.log(this.logindata);
              localStorage.setItem("userId" , data.userId);
           this.messageService.showSuccessMessage(" Login Sucessful","");

              this._user.checkUser();

              this.router.navigateByUrl("/home");


          }
          else{
          this.messageService.showErrorMessage("Wrong Credentials","")
          }
        },
        (error)=>{
          this.messageService.showErrorMessage("Wrong Credentials","")
        }
      )

    
 }
}




}