package com.example.spikejunitmockito.PL.rest;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class BookRest {
    private Integer id;
    private String name;
    private String summary;
    private Integer rating;



}
