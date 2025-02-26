import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CardModel } from '../../models/card-model';
import { ControlTabsWorkflowsService } from '../../service/controlTabsWorkflows.service';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';

@Component({
  standalone: true,
  selector: 'app-carousel',
  imports: [NzCarouselModule, NgFor, CardCarouselComponent],
  template: `<p>carousel works!</p>`,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
  array: CardModel[] = [];
  effect = 'scrollx';

  constructor(
    private controlTabsWorkflowsService: ControlTabsWorkflowsService
  ) {
    this.array.push(new CardModel('Condenacao', 95, '55%'));
    this.array.push(new CardModel('Intimacao', 458, '55%'));
    this.array.push(new CardModel('Prestacao de Contas', 99, '55%'));
  }

  // chamarModulo(modulo: string) {
  //   console.log(modulo);
  //   this.controlTabsWorkflowsService.moduloWorkflows.set(modulo);
  // }
}
