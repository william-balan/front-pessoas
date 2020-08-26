import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ListagemComponent } from './listagem/listagem.component';
import { RouterModule } from '@angular/router';
import { CadastroV2Component } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    ListagemComponent, 
    CadastroV2Component],
  imports: [
    RouterModule.forRoot([
      { path: 'v2', component: CadastroV2Component },
      { path: 'v2/listar', component: ListagemComponent },
    ]),
    CommonModule,
    FormsModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatTabsModule
  ],
  exports: [
    CadastroV2Component
  ]
})
export class V2Module { }
