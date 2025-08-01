import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../clientes/model/cliente';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private httpClient: HttpClient) {}

  public getClientes(): Observable<Array<Cliente>> {
    return this.httpClient.get<Array<Cliente>>(
      'http://localhost:8080/api/clientes'
    );
  }

  public salvarCliente(client: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(
      'http://localhost:8080/api/clientes',
      client
    );
  }
}
