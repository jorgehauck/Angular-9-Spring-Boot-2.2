package io.github.jorgehauck.clientes.model.repository;

import io.github.jorgehauck.clientes.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}
