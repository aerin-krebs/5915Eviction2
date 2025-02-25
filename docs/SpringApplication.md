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
 - **h2-database** \
    In memory database which maps SQL tables to java persistence entities.

## Application Logic

![This will be a diagram of how everything is linking together - will black box the SQL and React app](./assets/SpringApplication.drawio.svg)

## Controllers

#### Message Controller

This controller is currenly our main and test controllers for the application - does not yet include Cross Origin Routing capabilities, though that is under way.

**Methods**

- getResource \
| A temporary method that returns a list of users, posted to the [/try-user](https://localhost:8080/try-user) extension of localhost. 
- getFaq \
| A temporary method that sendas a hello world message through the [/faq](https://localhost:8080/faq) extension of localhost. 
- getChat \
| A temporary method that sendas a hello world message through the [/chat](https://localhost:8080/chat) extension of localhost. 

## Entities

#### Decision Node

- **node_id (primary key)** \
   Node's ID stored as a Java Long. Avaliable for getting, not setting and required on Resource init.
- **is_leaf** \
   Node's leaf status stored as a Java Boolean. Avaliable for getting and setting, required on Resource init.
- **display_type** \
   Node's display type stored as a Java String. Avaliable for getting and setting, required on Resource init.
- **question** \
   Node's associated question stored as a Java String. Avaliable for getting and setting, not required on Resource init.
- **node_language** \
   Node's display language stored as a Java String. Avaliable for getting and setting, required on Resource init.

#### FAQ

- **faq_id (primary key)** \
   FAQ's ID stored as a Java Long. Avaliable for getting, not setting and required on Resource init.
- **question** \
   FAQ's question stored as a Java String. Avaliable for getting and setting, required on Resource init.
- **answer** \
   FAQ's answer stored as a Java String. Avaliable for getting and setting, required on Resource init.

#### FAQ Resource

- **faq_id (primary key) (foregin key to [FAQ](#faq) faq_id on DELETE CASCADE)** \
   FAQ's ID stored as a Java Long. Avaliable for getting, not setting and required on Resource init.
- **resource_id (primary key) (foregin key to [Resources](#resource) resource_id on DELETE CASCADE)** \
   Resource ID stored as a Java Long. Avaliable for getting, not setting and required on Resource init.

#### Node Resource

- **node_id (primary key) (foregin key to [Node Resource](#node-resource) node_id on DELETE CASCADE)** \
   Node ID stored as a Java Long. Avaliable for getting, not setting and required on Resource init.
- **resource_id (primary key) (foregin key to [Resources](#resource) resource_id on DELETE CASCADE)** \
   Resource ID stored as a Java Long. Avaliable for getting, not setting and required on Resource init.

#### Question Answer

- **parent_node (primary key) (foregin key to [Decision Node](#decision-node) node_id on DELETE CASCADE)** \
   Question Answer's parent node ID stored as a Java Long. Avaliable for getting, not setting and required on Resource init.
- **child_node (foregin key to [Decision Node](#decision-node) node_id on DELETE SET NULL)** \
   Question Answer's child node ID stored as a Java Long. Avaliable for getting and setting and not required on Resource init.
- **answer (primary key)** \
   Question Answer's answer text stored as a Java String. Avaliable for getting, not setting and required on Resource init.

#### Resource

- **resource_id (primary key)** \
   Resources' ID stored as a Java Long. Avaliable for getting, not setting and required on Resource init.
- **resource_category** \
   Resources' category stored as a Java String. Avaliable for getting and setting, required on Resource init.
- **title** \
   Resources' title stored as a Java String. Avaliable for getting and setting, required on Resource init.
- **summary** \
   Resources' summary stored as a Java String. Avaliable for getting and setting, not required on Resource init.  
- **url** \
   Resources' url stored as a Java String. Avaliable for getting and setting, required on Resource init.
- **date_updated** \
   Resources' most recent date updated stored as a Java String. Avaliable for getting and setting, required on Resource init.
- **creator (foregin key to [Users](#user) user_id on DELETE SET NULL)** \
   Resources' creator_id stored as a Java Long. Avaliable for getting and setting, not required on Resource init.

#### User
- **user_id (primary key)**\
   User's ID stored as a Java Long. Avaliable for getting but not setting and is required on User init.
- **fname** \
   User's first name stored as a Java String. Avaliable to get and set, not  required on init.
- **lname** \
   User's last name stored as a Java String. Avaliable to get and set, not required on init.
- **user_type** \
   User's type stored as a Java String. Avaliable to get and set, required on init.
- **email** \
   User's email stored as a Java String. Avaliable to get and set, not required on init.
- **address** \
   User's address stored as a Java String. Avaliable to get and set, not required on init.
- **hashed_password** \
   User's hashed passeword stored as a Java String. Avaliable to get and set, not required on init.

#### Example Entity

``` java
package com.example.evictioneduspring.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@Table(name = "example-table")
public class ExampleTable {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long example_id
    private String example_data;

    protected ExampleTable() {}

    public ExampleTable(Long example_id_p, String example_data_p) {
        this.example_id = example_id_p;
        this.example_data = example_data_p;
    }

    @Override
    public String toString() {
        return String.format("ExampleTable[exampleId=%d, exampleData='%s']", example_id, example_data);
    }

    public Long getExampleId() {
      return this.example_id;
    }

    public void setExampleId(Long new_example_id) {
         // INVALID - PRIMARY KEY
    }

    public String getExampleData() {
      return this.example_data;
    }

    public void setExampleData(String new_example_data) {
      this.example_data = new_example_data;
    }

}
```

## Repositories

#### Example Repository

```java
package com.example.evictioneduspring.repositories;

import com.example.evictioneduspring.entities.ExampleTable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExampleTableRepository extends CrudRepository<ExampleTable, Long> {}
```

## Services

### Interfaces

Defines the standard service operations, a get individual, get all, update and delete.

#### Currently Used Interfaces
- [`DecisionNodeService`](../evictionEduspring/src/main/java/com/example/evictioneduspring/service/DecisionNodeService.java)
- [`FaqService`](../evictionEduspring/src/main/java/com/example/evictioneduspring/service/FaqService.java)
- [`FaqResourceService`](../evictionEduspring/src/main/java/com/example/evictioneduspring/service/FaqResourceService.java)
- [`NodeResourceService`](../evictionEduspring/src/main/java/com/example/evictioneduspring/service/NodeResourceService.java)
- [`QuestionAnswerService`](../evictionEduspring/src/main/java/com/example/evictioneduspring/service/QuestionAnswerService.java)
- [`ResourceService`](../evictionEduspring/src/main/java/com/example/evictioneduspring/service/ResourceService.java)
- [`UserService`](../evictionEduspring/src/main/java/com/example/evictioneduspring/service/UserService.java)


#### Example Interface

```java
package com.example.evictioneduspring.service;
import com.example.evictioneduspring.entities.ExampleTable;

import java.util.List;

public interface ExampleTableService {

    ExampleTable saveExampleTable(ExampleTable exampleTable);

    List<ExampleTable> fetchExampleTableList();

    ExampleTable updateExampleTable(ExampleTable exampleTable, Long exampleTable_id);

    void deleteExampleTableByID(Long exampleTable_id);
}
```

### Implementations

Implements the standard service operations, a get individual, get all, update and delete.

#### Current Implementations
- [`DecisionNodeServiceImpl`](../evictionEduspring/src/main/java/com/example/evictioneduspring/service/DecisionNodeServiceImpl.java)
- [`FaqServiceImpl`](../evictionEduspring/src/main/java/com/example/evictioneduspring/service/FaqServiceImpl.java)
- [`FaqResourceServiceImpl`](../evictionEduspring/src/main/java/com/example/evictioneduspring/service/FaqResourceServiceImpl.java)
- [`NodeResourceServiceImpl`](../evictionEduspring/src/main/java/com/example/evictioneduspring/service/NodeResourceServiceImpl.java)
- [`QuestionAnswerServiceImpl`](../evictionEduspring/src/main/java/com/example/evictioneduspring/service/QuestionAnswerServiceImpl.java)
- [`ResourceServiceImpl`](../evictionEduspring/src/main/java/com/example/evictioneduspring/service/ResourceServiceImpl.java)
- [`UserServiceImpl`](../evictionEduspring/src/main/java/com/example/evictioneduspring/service/UserServiceImpl.java)


#### Example Implementation

```java
package com.example.evictioneduspring.service;
import com.example.evictioneduspring.entities.ExampleTable;
import com.example.evictioneduspring.repositories.ExampleTableRepository;
import java.util.List;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExampleTableServiceImpl implements ExampleTableService {

    @Autowired
    private ExampleTableRepository exampleTableRepository;

    @Override
    ExampleTable saveExampleTable(ExampleTable exampleTable) {
        return exampleTableRepository.save(exampleTable);
    }

    @Override
    List<ExampleTable> fetchExampleTableList() {
        return (List<ExampleTable>)exampleTableRepository.findAll();
    }

    @Override
    ExampleTable updateExampleTable(ExampleTable exampleTable, Long exampleTable_id) {
        ExampleTable exampleTableDB = exampleTableRepository.findById(exampleTable_id).get();

        if (Objects.nonNull(exampleTable.getExampleId() && !"".equalsIgnoreCase(exampleTable.getExampleId()))) {
            exampleTableDB.setExampleId(exampleTable.getExampleId());
        }
        if (Objects.nonNull(exampleTable.getExampleData() && !"".equalsIgnoreCase(exampleTable.getExampleData()))) {
            exampleTableDB.setExampleData(exampleTable.getExampleData());
        }
       
        return exampleTableRepository.save(exampleTableDB);
    }

    @Override
    public void deleteExampleTableByID(Long exampleTable_id) {
        exampleTableRepository.deleteById(exampleTable_id);
    }
}
```

## Enum Sets

These sets were originally designed to be used in the actual entities, however they may either be migrated for interna
 application validation **or** deprecated.

#### DisplayType

Specifies the format of the resource provided.

#### Language

Classifies the language of the resource avalible: Currently has English, Chinese, French, Hatitan, Somoli, and Spanish

#### ResourceCategory

Classifies the category that the resource is assigned to, used for internal sorting.

#### SQLDatasets

Specifies the SQL Table which the information is coming from, used to validate queries from the front end.

#### UserType

Specififes the type of user that is making queries or edits - each user will have associated permissions.

## Testing