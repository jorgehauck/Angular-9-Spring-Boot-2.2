import { Component, OnInit } from '@angular/core';

import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css'],
})
export class ClientesFormComponent implements OnInit {
  public cliente: Cliente;

  constructor() {}

  ngOnInit(): void {}
}
