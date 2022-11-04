package com.example.spikejunitmockito;

import com.example.spikejunitmockito.BLL.DTO.BookDTO;
import com.example.spikejunitmockito.BLL.service.impl.BookService;
import com.example.spikejunitmockito.PL.controller.impl.BookController;
import com.example.spikejunitmockito.PL.mapper.impls.BookRestMapper;
import com.example.spikejunitmockito.PL.rest.BookRest;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;

import static net.bytebuddy.matcher.ElementMatchers.is;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@WebMvcTest(BookController.class)
public class BookControllerTest {

    @MockBean
    private BookService service;


    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private BookRestMapper mapper;

    @Autowired
    private ObjectMapper objectMapper;


    //Unit test
    @Test()
    public void shouldInsertBook() throws Exception {

        BookRest atomicHabits = new BookRest(1, "Atomic Habits", "Learn how to develop good habits", 5);

        //Non posso fare il mapping direttamente nel then return sennò scoppia
        BookDTO dto = mapper.fromRestToDto(atomicHabits);
        when(service.insert(any(BookDTO.class))).thenReturn(dto);


        mockMvc.perform(post("/book")

                        .contentType(APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(atomicHabits)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$",hasSize(1)));


    }


    //Integration Test

}
