import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'app/core/login/login.service';
import { UsuarioService } from 'app/core/user/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    rememberMe: [false],
  });
  authenticationError = false;
  noValidos = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    //this.login();
  }
  login() {
    //this.router.navigate(['']);
    this.loginService
      .login({
        username: this.loginForm.get('username')!.value,
        password: this.loginForm.get('password')!.value,
        rememberMe: false,
      })
      .subscribe(
        res => {
          this.usuarioService.changeUsuarioActual(res);
          this.router.navigate(['']);
          this.authenticationError = false;
          //this.activeModal.close();
          if (
            this.router.url === '/account/register' ||
            this.router.url.startsWith('/account/activate') ||
            this.router.url.startsWith('/account/reset/')
          ) {
            this.router.navigate(['']);
          }
        },
        error => {
          this.noValidos = true;
        },
        () => (this.authenticationError = true)
      );
  }
}
