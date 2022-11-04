package com.example.spikejunitmockito.DAL;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<BookEntity,Integer> {
}
