package taskmanager.contoller;

import lombok.RequiredArgsConstructor;
import taskmanager.model.User;
import org.springframework.web.bind.annotation.*;
import taskmanager.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    //Register new user
    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userRepository.save(user);
    }

}
