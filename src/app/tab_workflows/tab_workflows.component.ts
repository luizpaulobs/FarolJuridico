import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ControlTabsWorkflowsService } from '../service/controlTabsWorkflows.service';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { DashboardComponent } from '../workflows/dashboard/dashboard.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CondenacaoComponent } from '../workflows/Condenacao/condenacao.component';

@Component({
  selector: 'app-tab-workflows',
  imports: [
    NzTabsModule,
    NzProgressModule,
    DashboardComponent,
    NzCardModule,
    CondenacaoComponent,
  ],
  templateUrl: `./tab_workflows.component.html`,
  styleUrl: './tab_workflows.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabWorkflowsComponent implements OnInit, AfterViewInit {
  private controlTabsWorkflowsService = inject(ControlTabsWorkflowsService);

  constructor(private renderer: Renderer2) {
    effect(() => {
      const valorAtual = this.controlTabsWorkflowsService.moduloWorkflows(); // Valor atualizado do Signal
      this.chamarModulo(valorAtual); // Chama a função assim que o Signal mudar
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.chamarModulo('Dashboard');
  }

  chamarModulo(modulo: string) {
    const tabs = document.querySelectorAll('.ant-tabs-tab');
    tabs.forEach((tab) => {
      if (tab.textContent == modulo) {
        this.renderer.setStyle(tab, 'display', 'block');
      }
    });
  }
}
