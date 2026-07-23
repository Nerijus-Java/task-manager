package taskmanager.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import taskmanager.dto.AuthResponse;
import taskmanager.dto.LoginRequest;
import taskmanager.exception.ResourceNotFoundException;
import taskmanager.model.User;
import taskmanager.repository.UserRepository;
import taskmanager.service.AuthService;

import java.nio.file.ReadOnlyFileSystemException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;
    private final UserRepository userRepository;


    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            authService.registerUser(user);
            return ResponseEntity.ok("User registered");
        }catch (IllegalArgumentException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest request) throws Exception {

        String token = authService.loginUser(request.getUsernameOrEmail(),request.getPassword());
        User user = userRepository.findByUsernameOrEmail(request.getUsernameOrEmail(),request.getUsernameOrEmail())
                .orElseThrow(() -> new ResourceNotFoundException(request.getUsernameOrEmail()));

        return ResponseEntity.ok(new AuthResponse(token, user));

    }

}
