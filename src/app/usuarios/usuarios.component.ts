import { Component } from '@angular/core';
import { UsuarioFiltroComponent } from './usuario-filtro/usuario-filtro.component';

@Component({
  standalone: true,
  selector: 'app-usuarios',
  imports: [UsuarioFiltroComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss',
})
export class UsuariosComponent {}
