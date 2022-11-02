package com.example.spikejunitmockito.PL.mapper.abstracts;

import java.util.List;

public interface GeneralRestMapper<D,R> {

    R fromDtoToRest(D Dto);
    D fromRestToDto(R Rest);
    List<R> fromDtoListToRestList(List<D>Dtos);
    List<D> fromRestListToDtoList(List<R>Rests);

}
