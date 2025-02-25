import { Component } from '@angular/core';
import { TabWorkflowsComponent } from '../tab_workflows/tab_workflows.component';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-workflow',
  imports: [CarouselComponent, TabWorkflowsComponent],
  templateUrl: './workflows.component.html',
  styleUrl: './workflows.component.scss',
})
export class WorkflowsComponent {}
