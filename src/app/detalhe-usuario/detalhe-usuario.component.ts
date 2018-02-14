import { Component, OnInit } from '@angular/core';

import { ContatoModel } from '../modelos/contato-model';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.css']
})
export class DetalheUsuarioComponent implements OnInit {

  @Input() contato: ContatoModel;

  constructor() { }

  ngOnInit() {
  }

}
