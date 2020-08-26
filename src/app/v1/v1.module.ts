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

import { CadastroComponent } from './cadastro/cadastro.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ListagemComponent } from './listagem/listagem.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListagemComponent, 
    CadastroComponent],
  imports: [
    RouterModule.forRoot([
      { path: 'v1', component: CadastroComponent },
      { path: 'v1/listar', component: ListagemComponent },
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
    CadastroComponent
  ]
})
export class V1Module { }
