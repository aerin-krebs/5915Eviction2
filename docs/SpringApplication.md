# SpringBoot Application Documentation

[`< Return Home`](./TechDetailsHome.md)

## Table of Contents
- [`Dependencies`](#dependencies)
- [`Application Logic`](#application-logic)
- [`Controllers`](#controllers)
- [`Entities`](#entities)
- [`Enum Sets`](#enum-sets)
- [`Testing`](#testing)

## Dependencies

- **spring-boot-starter-web** \
    This is the base package which allows us to serve content to our react frontend
- **spring-boot-starter-test** \
    This base package provides foundations for the springboot testing framework
 - **reactor-test** \
    Tests our streamed output in a step by step manner - uses TestPublisher 
 - **spring-framework-starter-data-jpa** \
    Adds java persistance entities for use in interfacing with the backend.
 - **my-sql-connector-j** \
    Java implementation of the MySQL protocall - used with interfacing with the SQL database

## Application Logic

## Controllers

## Entities

## Enum Sets

#### DisplayType

#### Language

#### ResourceCategory



#### SQLDatasets

Specifies the SQL Table which the information is coming from, used to validate queries from the front end.

#### UserType

Classifies the language of the resource avalible: Currently has English, Chinese, French, Hatitan, Somoli, and Spanish

## Testing