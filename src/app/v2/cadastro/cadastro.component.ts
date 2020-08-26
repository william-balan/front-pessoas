import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientService } from '../client.service';


export class Endereco {
  cep: string;
  logradouro: string;
  bairro: string;
  cidade: string;
  estado: string;
}

export class Pessoa {
  id: number;
  nome: string;
  email: string;
  dataNascimento: string;
  naturalidade: string;
  nacionalidade: string;
  cpf: string;
  endereco: Endereco = new Endereco();
}

@Component({
  selector: 'app-cadastro-v2',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroV2Component implements OnInit {

  pessoa = new Pessoa();

  constructor(
    private pessoaService: ClientService
  ) {}

  ngOnInit(): void {
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
  
  limpar() {
    this.pessoa = new Pessoa();
  }

}
