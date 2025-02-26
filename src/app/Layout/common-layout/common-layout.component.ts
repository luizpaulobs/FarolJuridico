import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LoginService } from '../../service/login.service';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  standalone: true,
  selector: 'app-common-layout',
  imports: [
    NzLayoutModule,
    NgIf,
    RouterOutlet,
    RouterLink,
    NzIconModule,
    NzMenuModule,
    NzImageModule,
    RouterLink,
    NzButtonModule,
  ],
  templateUrl: './common-layout.component.html',
  styleUrl: './common-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonLayoutComponent {
  isCollapsed = false;
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/autenticacao/login']);
  }
}
