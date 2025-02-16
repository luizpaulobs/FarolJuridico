import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzProgressModule } from 'ng-zorro-antd/progress';

@Component({
  selector: 'app-dashboard',
  imports: [NzCardModule, NzProgressModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
