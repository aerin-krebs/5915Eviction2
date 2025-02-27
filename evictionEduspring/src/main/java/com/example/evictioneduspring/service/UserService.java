package com.example.evictioneduspring.service;
import com.example.evictioneduspring.entities.User;

import java.util.List;

public interface UserService {

    User saveUser(User user);

    List<User> fetchUserList();

    User updateUser(User user, Long user_id);

    void deleteUserByID(Long user_id);
}