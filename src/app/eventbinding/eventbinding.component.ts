import { Component } from '@angular/core';
import { Funcionario } from './models';


@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {

  funcionarios: Funcionario[] = []; // precisa colocar qual o tipo

  aoAdicionar(funcionario: any){
    this.funcionarios.push(funcionario);
  }
}

