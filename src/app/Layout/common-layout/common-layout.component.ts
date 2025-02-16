import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-common-layout',
  imports: [],
  template: './common-layout.component.html',
  styles: './common-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonLayoutComponent {}
