package com.kaansrflioglu.todo_app.repositories;

import com.kaansrflioglu.todo_app.entities.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Integer> {
}
