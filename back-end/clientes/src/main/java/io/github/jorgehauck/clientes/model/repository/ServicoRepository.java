package io.github.jorgehauck.clientes.model.repository;

import io.github.jorgehauck.clientes.model.entity.Servico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicoRepository extends JpaRepository<Servico, Integer> {
}
