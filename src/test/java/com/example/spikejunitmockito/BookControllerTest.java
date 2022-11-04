package com.example.spikejunitmockito;

import com.example.spikejunitmockito.BLL.DTO.BookDTO;
import com.example.spikejunitmockito.BLL.service.impl.BookService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc
@RunWith(SpringRunner.class)
//@WebMvcTest(BookController.class)
public class BookControllerTest {

    @MockBean
    private BookService service;


    @Autowired
    private MockMvc mockMvc;


    @Autowired
    private ObjectMapper objectMapper;


    //Unit test per la post
    @Test()
    public void shouldInsertBook() throws Exception {

        BookDTO dto = new BookDTO();
        dto.setId(1);
        dto.setName("Atomic Habits");
        dto.setSummary("Learn how to develop good Habits");
        dto.setRating(5);

        when(service.insert(any(BookDTO.class))).thenReturn(dto);


        mockMvc.perform(post("/book")
                        .contentType(APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name").value(dto.getName()))
                .andExpect(jsonPath("$.rating").value(dto.getRating()))
                .andExpect(jsonPath("$.summary").value(dto.getSummary()))
                .andExpect(jsonPath("$.id").value(dto.getId()));

    }

    //Unit test per la get
    @Test()
    public void shouldGetBook() throws Exception{
        BookDTO dto = new BookDTO();
        dto.setId(1);
        dto.setName("Atomic Habits");
        dto.setSummary("Learn how to develop good Habits");
        dto.setRating(5);

        List<BookDTO> result = new ArrayList<>();
        result.add(dto);

        when(service.getAll()).thenReturn(result);

        mockMvc.perform(get("/book"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value(dto.getName()))
                .andExpect(jsonPath("$[0].rating").value(dto.getRating()))
                .andExpect(jsonPath("$[0].summary").value(dto.getSummary()))
                .andExpect(jsonPath("$[0].id").value(dto.getId()));
    }






}
