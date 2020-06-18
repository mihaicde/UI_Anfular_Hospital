import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
//import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
  }

  async ngOnInit() {

    this.form = this.fb.group({
      username: ['', ],
      password: ['', Validators.required]
    });

   
  }

 async onSubmit() {

  if((this.form.controls['username'].value === "user") && (this.form.controls['password'].value === "pass")){
      localStorage.setItem('token', 'JWT');
      this.authService.isLoginSubject$.next(true);

      // this.router.navigate(["../dashboard"],{ relativeTo: this.route});
  }

  }

}