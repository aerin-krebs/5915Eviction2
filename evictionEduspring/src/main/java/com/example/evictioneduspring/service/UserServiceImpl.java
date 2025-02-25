package com.example.evictioneduspring.service;
import com.example.evictioneduspring.entities.User;
import com.example.evictioneduspring.repositories.UserRepository;
import java.util.List;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> fetchUserList () {
        return (List<User>)userRepository.findAll();
    }

    @Override
    public void deleteUserByID(Long user_id) {
        userRepository.deleteById(user_id);
    }
}