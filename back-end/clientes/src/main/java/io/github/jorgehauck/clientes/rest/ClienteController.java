package io.github.jorgehauck.clientes.rest;

import io.github.jorgehauck.clientes.model.entity.Cliente;
import io.github.jorgehauck.clientes.model.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping(value = "/api/clientes")
@CrossOrigin(value = "http://localhost:4200")
public class ClienteController {
    private final ClienteRepository repository;
    @Autowired
    public ClienteController(ClienteRepository repository) {
        this.repository = repository;
    }
    @GetMapping
    public List<Cliente> obterTodos() {
        return repository.findAll();
    }
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Cliente salvar(@RequestBody @Valid Cliente cliente) {
        return repository.save(cliente);
    }
    @GetMapping("/{id}")
    public Cliente acharPorId(@PathVariable Integer id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado!"));
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Integer id) {
        repository
                .findById(id)
                .map(cliente -> {
                    repository.delete(cliente);
                    return Void.TYPE;
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado!"));
    }
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar(@PathVariable Integer id, @RequestBody @Valid Cliente clienteAtualizado) {
        repository
                .findById(id)
                .map(cliente -> {
                    clienteAtualizado.setId(id);
                    return repository.save(clienteAtualizado);
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado!"));
    }
}
