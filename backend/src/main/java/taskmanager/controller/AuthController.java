package taskmanager.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import taskmanager.dto.AuthResponse;
import taskmanager.dto.LoginRequest;
import taskmanager.model.User;
import taskmanager.service.AuthService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;


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
        return ResponseEntity.ok(new AuthResponse(token));

    }

}
