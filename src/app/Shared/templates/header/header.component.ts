import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [
    CommonModule,
    NzLayoutModule,
    NzButtonModule,
    NzIconModule,
    NzDropDownModule,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  searchVisible: boolean = false;
  quickViewVisible: boolean = false;
  isFolded: boolean = false;
  isExpand: boolean = false;
  nomeUsuario = '';
  perfil = '';
  usuarioId = 0;
  isLoggedIn$: Observable<boolean> = new Subject();
  alterandoStatus: boolean = false;
  avatarUrl: string = '';
  pacienteLogado: boolean = false;

  constructor() {}

  isCollapsed = true;

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
