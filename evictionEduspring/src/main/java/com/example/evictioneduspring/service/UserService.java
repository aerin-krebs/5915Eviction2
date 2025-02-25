package com.example.evictioneduspring.service;
import com.example.evictioneduspring.entities.User;

import java.util.List;

public interface UserService {

    User saveUser(User user);

    List<User> fetchUserList();

    void deleteUserByID(Long user_id);
}