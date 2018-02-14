import { Component, OnInit } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';
import { ContatosDataBaseService } from '../servicos/contatos-data-base.service';

@Component({
  selector: 'app-dados-usuarios',
  templateUrl: './dados-usuarios.component.html',
  styleUrls: ['./dados-usuarios.component.css']
})
export class DadosUsuariosComponent implements OnInit {

  enviado: boolean = false;

  _nome: string;
  _telefone: string;
  _email: string;
  _tipo: string = undefined;

  tipos: string [] = ['Particular', 'Trabalho', 'Amigos', 'Família'];

  constructor(private dataBaseService: ContatosDataBaseService) { }

  ngOnInit() {
  }

  enviarDados(): void {

    if(this._tipo == undefined){

      this._tipo = this.tipos[0];

    }

    let novoContato = new ContatoModel(this._nome, this._telefone, this._email, this._tipo);

    this.dataBaseService.setContato(novoContato);

    this.enviado = ! this.enviado;

  }

  voltar(): void {

    this._nome = '';
    this._telefone = '';
    this._email = '';
    this._tipo = undefined;
    this.enviado = ! this.enviado;
  
  }

}
