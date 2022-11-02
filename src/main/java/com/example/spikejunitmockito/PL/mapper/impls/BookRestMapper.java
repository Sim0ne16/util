package com.example.spikejunitmockito.PL.mapper.impls;

import com.example.spikejunitmockito.BLL.DTO.BookDTO;
import com.example.spikejunitmockito.PL.mapper.abstracts.GeneralRestMapper;
import com.example.spikejunitmockito.PL.rest.BookRest;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BookRestMapper extends GeneralRestMapper<BookDTO, BookRest> {
}
