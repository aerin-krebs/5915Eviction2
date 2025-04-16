package com.example.evictiontests;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features/FrontendFeatures",  //Path to your feature files
        glue = "com.example.evictiontests.stepdefinitions", // Package containing step definitions
        tags = "@adhoc",
        plugin = {"pretty","html:target/cucumber-reports.html"}, //Report Generation
        monochrome = true // Makes Output Readable
)

public class TestRunner {
}
