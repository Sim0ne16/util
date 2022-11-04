package com.example.spikejunitmockito.PL.controller.impl;

import com.example.spikejunitmockito.BLL.DTO.BookDTO;
import com.example.spikejunitmockito.BLL.service.impl.BookService;
import com.example.spikejunitmockito.PL.controller.abstr.GenericController;
import com.example.spikejunitmockito.PL.mapper.impls.BookRestMapper;
import com.example.spikejunitmockito.PL.rest.BookRest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/book")
public class BookController implements GenericController<BookRest> {

    private final BookService service;
    private final BookRestMapper mapper;



    @Override
    @GetMapping
    public ResponseEntity<List<BookRest>> getAll() {
        try {
            List<BookDTO> list= service.getAll();
            List<BookRest> restList= mapper.fromDtoListToRestList(list);
            return new ResponseEntity<>(restList,HttpStatus.OK);
        } catch (EntityNotFoundException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @Override
    @PostMapping
    public ResponseEntity<BookRest> post(@RequestBody BookRest rest) {
        try {
            BookDTO BookDTO= service.insert(mapper.fromRestToDto(rest));
            BookRest BookRest= mapper.fromDtoToRest(BookDTO);
            return new ResponseEntity<>(BookRest, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }



}
