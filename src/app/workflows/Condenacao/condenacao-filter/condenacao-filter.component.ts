import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CondenacaoModel } from '../../../models/Condenacao/condenacao.model';
import { CondenacaoService } from '../../../service/condenacao.service';

@Component({
  selector: 'app-condenacao-filter',
  imports: [
    NzIconModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './condenacao-filter.component.html',
  styleUrl: './condenacao-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CondenacaoFilterComponent {
  validateForm: FormGroup;
  constructor(
    private fb: NonNullableFormBuilder,
    private condenacaoService: CondenacaoService
  ) {
    this.validateForm = this.fb.group({
      nome: this.fb.control(''),
      sobrenome: this.fb.control(''),
      email: this.fb.control(''),
      motivo: this.fb.control(''),
      submotivo: this.fb.control(''),
      dataDistribuicao: this.fb.control(''),
      dataPrazo: this.fb.control(''),
      tipoTeste: this.fb.control(''),
      tipoReversao: this.fb.control(''),
      tipoPagamento: this.fb.control(''),
    });
  }

  onChange(result: Event): void {
    console.log('onChange: ', result);
  }

  submitForm() {
    console.log(this.validateForm.value);
    const req = new CondenacaoModel(
      this.validateForm.value.nome,
      this.validateForm.value.sobrenome,
      this.validateForm.value.email,
      this.validateForm.value.motivo,
      this.validateForm.value.submotivo,
      this.validateForm.value.dataDistribuicao,
      this.validateForm.value.dataPrazo,
      this.validateForm.value.tipoTeste,
      this.validateForm.value.tipoReversao,
      this.validateForm.value.tipoPagamento
    );
    let result = this.condenacaoService.pesquisar(req);
    console.log(result);
  }
}
