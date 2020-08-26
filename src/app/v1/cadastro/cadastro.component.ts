import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientService } from '../client.service';


export class Pessoa {
  id: number;
  nome: string;
  email: string;
  dataNascimento: string;
  naturalidade: string;
  nacionalidade: string;
  cpf: string;

}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(
    private pessoaService: ClientService
  ) {}

  ngOnInit(): void {
  }

  limpar() {
    this.pessoa = new Pessoa();
  }

  cadastrar() {
    this.pessoaService.criarPessoa(this.pessoa)
      .subscribe(resposta => {
        this.pessoa = <any> resposta
        alert('Cadastro realizado com sucesso!');
      },
      error => {
        alert('Erro ao processar sua requisição.')
        console.log("Erro!", error);
      });
  }
  


}
