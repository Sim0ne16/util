package com.example.spikejunitmockito;

import com.example.spikejunitmockito.BLL.DTO.BookDTO;
import com.example.spikejunitmockito.BLL.service.impl.BookService;
import com.example.spikejunitmockito.PL.controller.impl.BookController;
import com.example.spikejunitmockito.PL.mapper.impls.BookRestMapper;
import com.example.spikejunitmockito.PL.rest.BookRest;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;
import static net.bytebuddy.matcher.ElementMatchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(BookController.class)
public class BookControllerTest {

    @Mock
    private BookService service;


    @Autowired
    private MockMvc mockMvc;

    @Mock
    private BookRestMapper mapper;

    @Autowired
    private ObjectMapper objectMapper;




    @Test()
    public void shouldInsertBook() throws Exception {

        BookRest atomicHabits = new BookRest(1,"Atomic Habits","Learn how to develop good habits",5);

        //Non posso fare il mapping direttamente nel then return sennò scoppia
        BookDTO dto = mapper.fromRestToDto(atomicHabits);
        when(service.insert(any(BookDTO.class))).thenReturn(dto);


        this.mockMvc.perform(post("/book")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(objectMapper.writeValueAsString(atomicHabits)))
                .andExpect(status().isCreated())
                .andExpect((ResultMatcher) jsonPath("$.name",is(atomicHabits.getName())))
                .andExpect((ResultMatcher) jsonPath("$.rating",is(atomicHabits.getRating())));

    }

}
