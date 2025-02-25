package com.example.evictioneduspring.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import com.example.evictioneduspring.enums.UserType;

@Entity
// @Table(name = "Users")
public class User {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long user_id;
    private String first_name;
    private String last_name;
    private UserType user_type;
    private String email;
    private String address;
    private String hash_password;

    protected User() {}

    public User(long user_id_p, UserType user_type_p) {
        this.user_id = user_id_p;
        this.user_type = user_type_p;
    }

    @Override
    public String toString() {
        return String.format(
            "User[userId=%d, firstName='%s', lastName='%s', userType='%s', email='%s', address='%s', hashPassword='%s']",
            user_id, first_name, last_name, user_type.toString(), email, address, hash_password
        );
    }

    public long getUserId () {
        return user_id;
    }

    public void setUserId(long new_user_id) {
        // INVALID - PRIMARY KEY
    }

    public String getFirstName() {
        return first_name;
    }

    public void setFirstName(String new_first_name) {
        this.first_name = new_first_name;
    }

    public String getLastName() {
        return last_name;
    }

    public void setLastName(String new_last_name) {
        this.last_name = new_last_name;
    }

    public UserType getUserType() {
        return user_type;
    }

    public void setUserType(UserType new_user_type) {
        this.user_type = new_user_type;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String new_email) {
        this.email = new_email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String new_address) {
        this.address = new_address;
    }

    public String getHashPassword() {
        return hash_password;
    }

    public void setHashPassword(String new_hash_password) {
        this.hash_password = new_hash_password;
    }

}