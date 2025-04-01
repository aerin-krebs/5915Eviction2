package com.example.evictioneduspring.stepdefinitions;

import com.example.evictioneduspring.EvictionEduSpringApplication;
import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;

@CucumberContextConfiguration
@SpringBootTest(classes = EvictionEduSpringApplication.class)
public class CucumberSpringConfiguration {
    // This class is used to configure Cucumber to use Spring Boot's context.
}
