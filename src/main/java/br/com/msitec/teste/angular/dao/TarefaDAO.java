package br.com.msitec.teste.angular.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.msitec.teste.angular.model.Tarefa;

public interface TarefaDAO extends JpaRepository<Tarefa, Long> {}