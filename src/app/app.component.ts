import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HeaderComponent } from './Shared/templates/header/header.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterLink,
    RouterOutlet,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    RouterOutlet,
    HeaderComponent,
    NzBreadCrumbModule,
    NzImageModule,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isCollapsed = false;
}
