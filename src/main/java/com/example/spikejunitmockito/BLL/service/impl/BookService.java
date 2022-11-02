package com.example.spikejunitmockito.BLL.service.impl;

import com.example.spikejunitmockito.BLL.DTO.BookDTO;
import com.example.spikejunitmockito.BLL.mapper.impl.BookMapper;
import com.example.spikejunitmockito.BLL.service.general.BookCrud;
import com.example.spikejunitmockito.DAL.BookEntity;
import com.example.spikejunitmockito.DAL.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookService implements BookCrud {

    private final BookRepository repository;
    private final BookMapper mapper;
    @Override
    public BookDTO insert(BookDTO dto) {
        BookEntity BookToSave= mapper.fromDtoToEntity(dto);
        BookEntity BookSaved= repository.save(BookToSave);
        return mapper.fromEntityToDto(BookSaved);
    }

    @Override
    public List<BookDTO> getAll() {
        List<BookEntity> BookEntityList= repository.findAll();
        return mapper.fromEntityListToDtoList(BookEntityList);
    }
}
