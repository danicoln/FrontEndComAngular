import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent  {

//decorador @Input() com "alias" como parametro
@Input('objetoFuncionario') funcionario: any;

  

}
