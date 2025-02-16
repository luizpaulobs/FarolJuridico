import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ControlTabsWorkflowsService {
  moduloWorkflows = signal('Dashboard');
  constructor() {}
}
