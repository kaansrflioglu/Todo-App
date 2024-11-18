package com.kaansrflioglu.todo_app.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String text;

    @Column(nullable = false)
    private Boolean completed = false;
}
