// package com.example.evictioneduspring.assist;

// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;

// import com.example.evictioneduspring.assist.UserType;
// // import static UserType.*;

// @Entity
// // @Table(name = "users")
// public class User {

//     @Id
//     @GeneratedValue(strategy=GenerationType.AUTO)
//     private long user_id;
//     private String first_name;
//     private String last_name;
//     private UserType user_type;
//     private String email;
//     private String address;
//     private String hash_password;

//     protected User() {}

//     public User(long user_id_p, UserType user_type_p) {
//         this.user_id = user_id_p;
//         this.user_type = user_type_p;
//     }


// }