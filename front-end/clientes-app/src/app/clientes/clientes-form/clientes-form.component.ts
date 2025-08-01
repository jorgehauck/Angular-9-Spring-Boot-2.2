import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Cliente } from '../model/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css'],
})
export class ClientesFormComponent implements OnInit {
  public cliente: Cliente;
  public success: boolean = false;
  public errors: string[] = [];

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {}

  public onSubmit(): void {
    this.clientesService.salvarCliente(this.cliente).subscribe(
      (response) => {
        this.success = true;
        this.errors = [];
        this.cliente = response;
      },
      (errorResponse: HttpErrorResponse) => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      }
    );
  }

  public voltar(): void {
    this.router.navigate(['/clientes-list']);
  }
}
