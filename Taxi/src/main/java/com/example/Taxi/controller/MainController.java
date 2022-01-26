package com.example.Taxi.controller;

import com.example.Taxi.domain.Room;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Slf4j
@Controller
public class MainController {
    @ResponseBody
    @RequestMapping(value = "/Rooms", method = RequestMethod.POST)
    public String start(@RequestBody Room room){
        log.info(room.getId().getClass().toString());
        log.info(room.getId().toString());
        if(room.getId() != null)
            return "success";
        return "fail";
    }
}
