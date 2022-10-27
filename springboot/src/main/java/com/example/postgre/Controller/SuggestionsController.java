package com.example.postgre.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.postgre.Model.Data.Suggestions;
import com.example.postgre.repository.SuggestionsRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class SuggestionsController {

    @Autowired
    private SuggestionsRepository suggestionsRepository;

    @GetMapping("/suggestions")
    public List<Suggestions> getSuggestions() {
        return suggestionsRepository.findAll();
    }

    @GetMapping("/suggestion/{location}")
    public Optional<Suggestions> getSuggestion(@PathVariable("location") String location) {
        return suggestionsRepository.findById(location);
    }

    @PostMapping("/suggestions")
    public Suggestions createSuggestion(@RequestBody Suggestions suggestions) {
        return suggestionsRepository.save(suggestions);
    }
}
