package taskmanager.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import taskmanager.dto.AuthResponse;
import taskmanager.dto.LoginRequest;
import taskmanager.model.User;
import taskmanager.repository.UserRepository;
import taskmanager.security.JwtUtil;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationConfiguration authenticationConfiguration;

    private final UserRepository userRepository;

    private final JwtUtil jwtUtil;

    private final PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {

        if (userRepository.existsUserByUsername(user.getUsername())) {
            return ResponseEntity.badRequest().body("Username is already taken!");
        }

        if (userRepository.existsUserByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body("Email is already taken!");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully!");
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest request) throws Exception {

        AuthenticationManager authenticationManager = authenticationConfiguration.getAuthenticationManager();
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsernameOrEmail(),
                        request.getPassword()
                )
        );

        String token = jwtUtil.generateToken(authentication.getName());
        return ResponseEntity.ok(new AuthResponse(token));

    }

}
