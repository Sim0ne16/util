package com.example.spikejunitmockito.BLL.mapper.general;

import java.util.List;

public interface GeneralMapper<E, D> {
    D fromEntityToDto(E entity);
    E fromDtoToEntity(D dto);
    List<D> fromEntityListToDtoList(List<E> entities);
    List<E> fromDtoListToEntityList(List<D> dto);
}
