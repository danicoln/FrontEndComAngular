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

/** 
getClassesCss(){
  return ['bg', 'bg-default'];
}*/

isAdmin(){
  return this.funcionario.nome.startsWith('T');
  
}

    getEstilosCartao(){
      return {
        'border-width.px' : this.funcionario.id, 
      backgroundColor: this.funcionario.id % 2 === 0 
      ? 'lightblue' : 'lightgreen'

    };
  }
}
