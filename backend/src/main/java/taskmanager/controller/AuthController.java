package taskmanager.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import taskmanager.dto.LoginRequest;
import taskmanager.dto.RegisterRequest;
import taskmanager.model.User;
import taskmanager.repository.UserRepository;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest request) {

        if (userRepository.existsUserByUsername(request.getUsername())) {
            return ResponseEntity.badRequest().body("Username is taken");
        }

        if (userRepository.existsUserByEmail(request.getEmail())) {
            return ResponseEntity.badRequest().body("Email is already in use");
        }

        User newUser = new User();

        newUser.setUsername(request.getUsername());
        newUser.setEmail(request.getEmail());
        newUser.setDateOfBirth(request.getDateOfBirth());

        //!!No encryption
        newUser.setPassword(request.getPassword());

        userRepository.save(newUser);

        return ResponseEntity.ok("User Registered");
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest request) {

        return ResponseEntity.ok("Login ok");
    }

}
