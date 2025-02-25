import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-layout-login',
  imports: [RouterOutlet],
  templateUrl: './layout-login.component.html',
  styleUrl: './layout-login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutLoginComponent {}
