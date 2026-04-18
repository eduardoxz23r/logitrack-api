package com.carlos.logitrackapi.controller;

import com.carlos.logitrackapi.model.Encomenda;
import com.carlos.logitrackapi.service.EncomendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController // Avisa que esse arquivo é a "Portaria" da internet
@RequestMapping("/encomendas")  // Define o endereço do site (ex: localhost:8080/encomendas)
@CrossOrigin("*")  // Isso aqui vai permitir que seu HTML/CSS consiga conversar com o Java depois
public class EncomendaController {

    @Autowired  // Chama o Service (o Conferente) para trabalhar
    private EncomendaService service;

    @GetMapping // Quando alguém entrar no site para "VER"
    public List<Encomenda> listar() {
        return service.listarTodas();
    }

    @PostMapping // Quando alguém enviar um "NOVO" pacote para o sistema
    public Encomenda criar(@RequestBody Encomenda encomenda) {
        return service.salvar(encomenda);
    }
}
