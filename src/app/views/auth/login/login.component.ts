import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  defaultAuth = {
    username: 'admin',
    password: 'nanana',
  };
  model: any = {};
  loading = false;
  returnUrl!: string;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginSvc: LoginService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
    // console.log(this.loginForm);

    // get return url from route parameters or default to '/'
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: [
        this.defaultAuth.username,
        Validators.compose([
          Validators.required,
          // Validators.email,
          Validators.minLength(3),
          Validators.maxLength(50), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        ]),
      ],
      password: [
        this.defaultAuth.password,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
    });
  }

  login(): void {
    this.loading = true;
    this.loginSvc.login(this.model.username, this.model.password)
      .subscribe((hasil: boolean) => {
        if (hasil) {
          // login successful
          this.router.navigate(['../../dashboard/dashboard']);
        } else {
          // login failed
          console.log("Login Failed !");

          // this.errorHandle.log("Login Failed !", "Username and password is incorrect", 3)
        }
      })
  }

}
