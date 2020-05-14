import { Component } from '@angular/core';

import Utils from '../commons/utils'

import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';

class Partipante {
  nome: string = "";
  entregues: string = "";
  emRevisao: string = "";
  naoFinalizadas: string = "";
  planoReversao: string = "";
  coisasLegais: string = "";
  coisasRuins: string = "";
  nota: number = 0;
  acoesDiferentes: string = "";
  
  constructor(nome: string) {
    this.nome = nome;
  }
}

@Component({
  selector: 'app-ata',
  templateUrl: './ata.component.html',
  styleUrls: ['./ata.component.css']
})
export class AtaComponent {

  constructor(private _snackBar: MatSnackBar) {}

  inicioSemana = Utils.currentMonday().formatted();
  fimSemana = Utils.currentFriday().formatted();

  hoje = moment().format('DD/MM/yyyy');

  participantes: Partipante[] = [
    new Partipante('Fulano'),
    new Partipante('Ciclano')
  ];

  get presentes(): string {
    return this.participantes.map(p => p.nome).join(', ');
  }

  marcarPresenca() {
    if (this.isParticipantePresente()) {
      this._snackBar.open('Participante já presente.', '', {
        duration: 1000 * 5
      });
      return;
    }
    this.participantes.push(new Partipante('Beltrano'));
  }

  isParticipantePresente(): boolean {
    return this.participantes.filter(p => p.nome == 'Beltrano').length > 0;
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

}
