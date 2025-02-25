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

@Component({
  standalone: true,
  selector: 'app-autenticacao-duas-etapas',
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule],
  templateUrl: './autenticacao-duas-etapas.component.html',
  styleUrl: './autenticacao-duas-etapas.component.scss',
})
export class AutenticacaoDuasEtapasComponent {
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.validateForm = this.fb.group({
      codigo: this.fb.control('', [Validators.required]),
    });
  }

  submitForm(): void {
    console.log('submit', this.validateForm.value);
    let req = this.validateForm.value.codigo;
    let result = this.loginService.autenticacaoDuasEtapas(req);
    if (result) {
      this.router.navigate(['/common']);
    }
    console.log('Autenticcao falhou!!');
  }
}
