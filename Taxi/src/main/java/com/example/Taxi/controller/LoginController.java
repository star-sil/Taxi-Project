package com.example.Taxi.controller;

import com.example.Taxi.domain.Member;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class LoginController {
    @PostMapping("/start")
    public String start(Member member){
        return "redirect:/hello";
    }
}
