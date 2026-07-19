package taskmanager.contoller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import taskmanager.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

}
