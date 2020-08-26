import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
 
  ngOnInit() {
    this.listar();
  }

  pessoas = [];
  displayedColumns = ["codigo", "nome", "cpf", "dataNascimento"]

  constructor(private pessoaService: ClientService) {}
  
  listar() {
    this.pessoaService.listar()
      .subscribe(resposta => {
        this.pessoas = resposta['_embedded']['pessoas']
      });
  }


}
