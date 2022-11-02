package com.example.spikejunitmockito.BLL.mapper.impl;

import com.example.spikejunitmockito.BLL.DTO.BookDTO;
import com.example.spikejunitmockito.BLL.mapper.general.GeneralMapper;
import com.example.spikejunitmockito.DAL.BookEntity;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BookMapper extends GeneralMapper<BookEntity, BookDTO> {
}
