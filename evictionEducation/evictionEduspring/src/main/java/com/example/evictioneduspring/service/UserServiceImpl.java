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
    public User updateUser(User user, Long user_id) {
        User userDB = userRepository.findById(user_id).get();

        if (Objects.nonNull(user.getFirstName()) && !"".equalsIgnoreCase(user.getFirstName())) {
            userDB.setFirstName(user.getFirstName());
        }
        if (Objects.nonNull(user.getLastName()) && !"".equalsIgnoreCase(user.getLastName())) {
            userDB.setLastName(user.getLastName());
        }
        if (Objects.nonNull(user.getUserType()) && !"".equalsIgnoreCase(user.getUserType())) {
            userDB.setUserType(user.getUserType());
        }
        if (Objects.nonNull(user.getEmail()) && !"".equalsIgnoreCase(user.getEmail())) {
            userDB.setEmail(user.getEmail());
        }
        if (Objects.nonNull(user.getAddress()) && !"".equalsIgnoreCase(user.getAddress())) {
            userDB.setAddress(user.getAddress());
        }
        if (Objects.nonNull(user.getHashedPassword()) && !"".equalsIgnoreCase(user.getHashedPassword())) {
            userDB.setHashedPassword(user.getHashedPassword());
        }

        return userRepository.save(userDB);
    }

    @Override
    public void deleteUserByID(Long user_id) {
        userRepository.deleteById(user_id);
    }
}