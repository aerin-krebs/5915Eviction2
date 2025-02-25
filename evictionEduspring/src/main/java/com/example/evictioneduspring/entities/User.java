package com.example.evictioneduspring.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import com.example.evictioneduspring.enums.UserType;

@Entity
@Table(name = "Users")
public class User {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long user_id;
    private String fname;
    private String lname;
    private String user_type;
    private String email;
    private String address;
    private String hashed_password;

    protected User() {}

    public User(long user_id_p, String user_type_p) {
        this.user_id = user_id_p;
        this.user_type = user_type_p;
    }

    @Override
    public String toString() {
        return String.format(
            "User[userId=%d, firstName='%s', lastName='%s', userType='%s', email='%s', address='%s', hashedPassword='%s']",
            user_id, fname, lname, user_type, email, address, hashed_password
        );
    }

    public long getUserId () {
        return user_id;
    }

    public void setUserId(long new_user_id) {
        // INVALID - PRIMARY KEY
    }

    public String getFirstName() {
        return fname;
    }

    public void setFirstName(String new_fname) {
        this.fname = new_fname;
    }

    public String getLastName() {
        return lname;
    }

    public void setLastName(String new_lname) {
        this.lname = new_lname;
    }

    public String getUserType() {
        return user_type;
    }

    public void setUserType(String new_user_type) {
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

    public String getHashedPassword() {
        return hashed_password;
    }

    public void setHashedPassword(String new_hashed_password) {
        this.hashed_password = new_hashed_password;
    }

}