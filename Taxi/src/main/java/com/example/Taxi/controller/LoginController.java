package com.example.Taxi.controller;

import com.example.Taxi.domain.Member;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@Controller
public class LoginController {
    @ResponseBody
    @RequestMapping(value = "/start", method = RequestMethod.POST)
    public String start(@RequestBody Member member){
        if(member.getPassword() == 1234)
            return "success";
        return "fail";
    }
}
