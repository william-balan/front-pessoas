import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'
import { MatBadgeModule } from '@angular/material/badge'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatDividerModule } from '@angular/material/divider'
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {TextFieldModule} from '@angular/cdk/text-field'

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CadastroComponent } from './v1/cadastro/cadastro.component';
import { V1Module } from './v1/v1.module';
import { ListagemComponent } from './v1/listagem/listagem.component';

import { HttpClientModule } from '@angular/common/http';
import { V2Module } from './v2/v2.module';
import { CadastroV2Component } from './v2/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'v1', component: CadastroComponent },
      { path: 'v1/listar', component: ListagemComponent },

      { path: 'v2', component: CadastroV2Component },
      { path: 'v2/listar', component: ListagemComponent },
    ]),
    // CadastroV2Component,
    V1Module,
    V2Module,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatSelectModule,
    FormsModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
