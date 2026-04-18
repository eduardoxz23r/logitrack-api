package com.carlos.logitrackapi.service;

import com.carlos.logitrackapi.model.Encomenda;
import com.carlos.logitrackapi.repository.EncomendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service  // Avisa ao Java que aqui fica a inteligência do sistema
public class EncomendaService {

    @Autowired   // "Contrata" o Repository para ser usado aqui dentro
    private  EncomendaRepository repository;

    // Listar tudo o que está guardado no banco
    public List<Encomenda> listarTodas() {
        return repository.findAll();
    }


    // salvar uma nova encomenda
    public Encomenda salvar(Encomenda encomenda) {

        encomenda.setStatus("POSTADO");
        return repository.save(encomenda);
    }
}
