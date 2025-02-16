import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { TabWorkflowsComponent } from '../tab_workflows/tab_workflows.component';

@Component({
  selector: 'app-teste',
  imports: [CarouselComponent, TabWorkflowsComponent],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TesteComponent {}
