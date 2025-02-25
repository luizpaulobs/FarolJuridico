import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { loginModel } from '../models/login/loginModel';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router) {}

  logar(data: loginModel): boolean {
    if (data.email == 'leaf@leaf.com.br') {
      return true;
      //this.router.navigate(['/common'])
    } else {
      return false;
      //this.router.navigate(['/common'])
    }
  }

  autenticacaoDuasEtapas(codigo: string): boolean {
    if (codigo == '123') {
      return true;
    }
    return false;
  }
}
