import { Component, OnInit } from '@angular/core';

import { ContatoModel } from '../modelos/contato-model';
import { ContatosDataBaseService } from '../servicos/contatos-data-base.service';
import { Output } from '@angular/core/src/metadata/directives';
import { EventEmitter } from '@angular/core/src/facade/async';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  listaDeContatos: ContatoModel [] = [];
  @Output() idClicado = new EventEmitter();

  constructor(private dataBaseService: ContatosDataBaseService) { }

  ngOnInit() {

    this.dataBaseService.enviarContato.subscribe(contatos => this.listaDeContatos = contatos);

  }

  contatoClicado(item: number): void {

    this.idClicado.emit(item);
  }

}
