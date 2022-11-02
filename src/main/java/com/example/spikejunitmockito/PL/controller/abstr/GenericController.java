package com.example.spikejunitmockito.PL.controller.abstr;

import com.example.spikejunitmockito.BLL.exception.NotFoundException;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface GenericController<R> {

    ResponseEntity<R> post(R rest) throws NotFoundException;

    ResponseEntity<List<R>> getAll();


}