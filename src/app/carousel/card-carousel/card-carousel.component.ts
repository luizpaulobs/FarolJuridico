import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CardModel } from '../../models/card-model';
import { ControlTabsWorkflowsService } from '../../service/controlTabsWorkflows.service';

@Component({
  selector: 'app-card-carousel',
  imports: [NzCardModule],
  templateUrl: './card-carousel.component.html',
  styleUrl: './card-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardCarouselComponent {
  titulo: string = 'Titulo';
  @Input() dados!: CardModel;

  constructor(
    private controlTabsWorkflowsService: ControlTabsWorkflowsService
  ) {}

  chamarModulo(modulo: string) {
    console.log(modulo);
    this.controlTabsWorkflowsService.moduloWorkflows.set(modulo);
  }
}
