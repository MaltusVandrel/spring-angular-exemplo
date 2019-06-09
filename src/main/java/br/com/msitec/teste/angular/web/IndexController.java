package br.com.msitec.teste.angular.web;

import javax.inject.Inject;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.msitec.teste.angular.ajax.Grid;
import br.com.msitec.teste.angular.dao.TarefaDAO;
import br.com.msitec.teste.angular.model.Tarefa;

@CrossOrigin(origins = "*")
@Controller
public class IndexController {

	@Inject private TarefaDAO tarefaDAO; 
	
    
	@PostMapping(value="/grid",produces = "application/json")
    @ResponseBody
    public Page<Tarefa> grid(@RequestBody Grid<Tarefa> grid) {
    	Example<Tarefa> example = Example.of(grid.getObject(),ExampleMatcher
				.matching()
    			.withMatcher("titulo", ExampleMatcher.GenericPropertyMatchers.startsWith())
    			.withMatcher("descricao", ExampleMatcher.GenericPropertyMatchers.contains()));
    	PageRequest pageRequest = PageRequest.of(grid.getPage(),grid.getPerPage(),grid.getSort());
    	
    	return tarefaDAO.findAll(example, pageRequest);
    }
    
    @PostMapping("/tarefa")
    @PutMapping("/tarefa")
    @ResponseBody
    public Tarefa salvarTarefa(@RequestBody Tarefa tarefa) {
    	tarefaDAO.save(tarefa);
    	return tarefa;
    }
    

    @GetMapping("/add")
    @ResponseBody
    public Tarefa addTarefa() {
    	Tarefa tarefa = new Tarefa("Teste"," Teste teste teste");
    	tarefaDAO.save(tarefa);
    	return tarefa;
    }
}
