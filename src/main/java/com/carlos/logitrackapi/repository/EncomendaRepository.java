package com.carlos.logitrackapi.repository;

import com.carlos.logitrackapi.model.Encomenda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EncomendaRepository  extends  JpaRepository<Encomenda, Long>{
}
