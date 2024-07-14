import { Component } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash, faL } from '@fortawesome/free-solid-svg-icons';
import { TextfiledComponent } from '../../shared/components/textfiled/textfiled.component';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../core/services/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FontAwesomeModule, TextfiledComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  iconEye = faEye;
  iconEyeSlash = faEyeSlash;

  showPassword = false;
  passwordType = 'password'

  userForm: FormGroup = new FormGroup({
    username: new FormControl('Admin',Validators.required),
    password: new FormControl('password',Validators.required)
  });
  isFormSubmitted: boolean = false;

  constructor(private authService: AuthService,
    private tokenService: TokenService,
    private cookieService: CookieService,
    private router: Router
  ){}

  // constructor(authService: AuthService){}

  setPassword() {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.passwordType = 'text'
    } else {
      this.passwordType = 'password'
    }
  }

  onSubmit(){
    this.isFormSubmitted = true;
    if (this.userForm.invalid) return;
    this.userForm.markAsTouched

    this.authService.postAuth(this.userForm.value).subscribe({
      next: (res) => {
        this.tokenService.setToken(res.accessToken);
        this.router.navigate(['/home']);
      },
      error: (err) => { console.log(err); }
    });
    
  }

  generateCookie(nameCookie: string, valueCookie: string){
    this.cookieService.set(nameCookie, valueCookie);
  }

}
