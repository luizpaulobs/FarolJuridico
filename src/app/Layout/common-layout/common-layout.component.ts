import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

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
  ],
  templateUrl: './common-layout.component.html',
  styleUrl: './common-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonLayoutComponent {
  isCollapsed = false;
}
