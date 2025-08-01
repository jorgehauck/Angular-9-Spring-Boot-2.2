import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css'],
})
export class ClientesListComponent implements OnInit {
  public clientes: Array<Cliente> = [];

  constructor(private clientService: ClientesService, private router: Router) {}

  ngOnInit(): void {
    this.clientService.getClientes().subscribe({
      next: (clientes) => {
        this.clientes = clientes;
      },
    });
  }

  public novoCadastro(): void {
    this.router.navigate(['/clientes-form']);
  }
}
