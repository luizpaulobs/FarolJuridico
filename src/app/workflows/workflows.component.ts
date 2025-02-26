import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { TabWorkflowsComponent } from './tab_workflows/tab_workflows.component';

@Component({
  standalone: true,
  selector: 'app-workflow',
  imports: [CarouselComponent, TabWorkflowsComponent],
  templateUrl: './workflows.component.html',
  styleUrl: './workflows.component.scss',
})
export class WorkflowsComponent {}
