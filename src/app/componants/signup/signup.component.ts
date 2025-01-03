import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/security/auth.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent /*implements OnInit */{


  messageResultEn: string = "";
  messageResultAr: string = "";

  constructor(private authService: AuthService,
  private route: Router){}

  signup(email: string, password: string, confirmPassword: string,name: string,phoneNumber: string) {


    if (password !== confirmPassword) {
      this.messageResultEn = "please check confirmation of password";
      this.messageResultAr = "برجاء التاكد من تاكيد كلمة السر  ";
      setTimeout(() => {
        this.messageResultEn = null;
        this.messageResultAr = null;
      }, 3000);
      return;
    }

    this.authService.createClient(name,email,password,phoneNumber).subscribe(
      data=>{ if (data && 'status' in data && data.status === 'BAD_REQUEST') {
        // @ts-ignore
        this.messageResultEn = data.bundleMessage.message_en;

        // @ts-ignore
        this.messageResultAr = data.bundleMessage.message_ar;

        setTimeout(() => {
          this.messageResultEn = null;
          this.messageResultAr = null;
        }, 3000);


      }else {
        this.route.navigateByUrl("/login");

      }
    })

  }

















  // constructor(private authService: AuthService,
  //             private route: Router) { }
  //
  // ngOnInit(): void {
  // }
  //
  // signup(email, password, confirmPassword) {
  //   if (password !== confirmPassword) {
  //     alert("Invalid Password");
  //     return;
  //   }
  //   this.authService.createClient(email, password).subscribe(
  //     data => {
  //       alert("client created");
  //       this.route.navigateByUrl("/login");
  //     }
  //   )
  // }

}
