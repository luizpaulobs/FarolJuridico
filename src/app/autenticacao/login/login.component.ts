import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { LoginService } from '../../service/login.service';
import { loginModel } from '../../models/login/loginModel';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.validateForm = this.fb.group({
      email: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
      remember: this.fb.control(true),
    });
  }

  submitForm(): void {
    console.log('submit', this.validateForm.value);
    let req = new loginModel({ ...this.validateForm.value });
    let result = this.loginService.logar(req);
    if (result) {
      this.router.navigate(['/common']);
    } else {
      this.router.navigate(['/autenticacao/autenticacao-duas-etapas']);
    }
  }
}
