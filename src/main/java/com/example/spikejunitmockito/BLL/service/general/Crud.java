package com.example.spikejunitmockito.BLL.service.general;

import com.example.spikejunitmockito.BLL.DTO.BookDTO;
import com.example.spikejunitmockito.BLL.exception.NotFoundException;

import java.util.List;

public interface Crud<D> {




    BookDTO insert(BookDTO dto);

    List<D> getAll();



}
