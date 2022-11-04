package com.example.spikejunitmockito.BLL.DTO;

import lombok.Data;
import lombok.EqualsAndHashCode;


@Data
//Serve per mockito
@EqualsAndHashCode
public class BookDTO {

    private Integer id;
    private String name;
    private String summary;
    private Integer rating;



}
