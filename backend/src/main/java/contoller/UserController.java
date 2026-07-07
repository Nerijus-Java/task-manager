package contoller;

import lombok.RequiredArgsConstructor;
import model.User;
import org.springframework.web.bind.annotation.*;
import repository.UserRepository;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    //Register new user
    @PostMapping
    public User registerUser(@RequestBody User user) {
        return userRepository.save(user);
    }

}
