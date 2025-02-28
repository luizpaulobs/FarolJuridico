import { Component } from '@angular/core';
import { UsuarioFiltroComponent } from './usuario-filtro/usuario-filtro.component';
import { UsuarioTableComponent } from './usuario-table/usuario-table.component';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  standalone: true,
  selector: 'app-usuarios',
  imports: [UsuarioFiltroComponent, UsuarioTableComponent, NzCardModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss',
})
export class UsuariosComponent {}
