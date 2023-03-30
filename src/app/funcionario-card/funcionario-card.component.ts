import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  //styleUrls: ['./funcionario-card.component.css']
  //adicionando estilos css em componentes
  styles: [`
    .card-block{
      text-transform: uppercase;
      color: blue;
    }

  `]
})
export class FuncionarioCardComponent  {

//decorador @Input() com "alias" como parametro
@Input('objetoFuncionario') funcionario: any;

  

}
