package com.example.spikejunitmockito.DAL;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "book_record")
@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
//Grazie a questa annotazione possiamo usufruire del pattern Builder
@Builder
public class BookEntity {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NonNull
    private String name;

    @NonNull
    private String summary;

    private Integer rating;

}
