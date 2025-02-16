import {
  ChangeDetectionStrategy,
  Component,
  effect,
  signal,
} from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import {
  CondenacaoService,
  CondenacaoTable,
} from '../../../service/condenacao.service';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-condenacao-table',
  imports: [NzTableModule, NzDividerModule, NgFor],
  templateUrl: './condenacao-table.component.html',
  styleUrl: './condenacao-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CondenacaoTableComponent {
  dataSet = signal<CondenacaoTable[]>([]);
  constructor(private condenacaoSerice: CondenacaoService) {
    effect(() => {
      this.dataSet.set(this.condenacaoSerice.listaCondenacao());
    });
  }
}
