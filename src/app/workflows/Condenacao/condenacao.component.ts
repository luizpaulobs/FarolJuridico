import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CondenacaoFilterComponent } from './condenacao-filter/condenacao-filter.component';
import { CondenacaoTableComponent } from './condenacao-table/condenacao-table.component';

@Component({
  selector: 'app-condenacao',
  imports: [
    CondenacaoFilterComponent,
    CondenacaoFilterComponent,
    CondenacaoTableComponent,
  ],
  templateUrl: './condenacao.component.html',
  styleUrl: './condenacao.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CondenacaoComponent {}
