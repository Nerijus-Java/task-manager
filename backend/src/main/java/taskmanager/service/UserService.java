package taskmanager.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import taskmanager.exception.ResourceNotFoundException;
import taskmanager.model.User;
import taskmanager.repository.UserRepository;


@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User getUserOrThrow(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User with ID " + userId + " not found"));

    }

    public User getUserByUsername(String name) {
        return userRepository.findByUsername(name)
                .orElseThrow(() -> new ResourceNotFoundException("User with Username " + name + " not found"));
    }
}
