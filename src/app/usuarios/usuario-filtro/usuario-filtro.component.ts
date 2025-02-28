import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  standalone: true,
  selector: 'app-usuario-filtro',
  imports: [
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    FormsModule,
    NzDividerModule,
  ],
  templateUrl: './usuario-filtro.component.html',
  styleUrl: './usuario-filtro.component.scss',
})
export class UsuarioFiltroComponent {
  validateForm: FormGroup;
  readonly listOfOption: string[] = this.alphabet();
  listOfSelectedValue = ['a10', 'c12'];

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control(''),
      remember: this.fb.control(true),
    });
  }
  pesquisar() {}

  alphabet(): string[] {
    const children: string[] = [];
    for (let i = 10; i < 36; i++) {
      children.push(i.toString(36) + i);
    }
    return children;
  }
}
