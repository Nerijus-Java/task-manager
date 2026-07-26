package taskmanager.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import taskmanager.dto.AuthResponse;
import taskmanager.exception.ResourceNotFoundException;
import taskmanager.model.User;
import taskmanager.repository.UserRepository;
import taskmanager.security.JwtUtil;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final AuthenticationConfiguration authenticationConfiguration;

    public User registerUser(User user) {
        if (userRepository.existsUserByUsername(user.getUsername())) {
            throw new IllegalArgumentException("Username is already taken");
        }
        if (userRepository.existsUserByEmail(user.getEmail())) {
            throw new IllegalArgumentException("Email is already taken");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public AuthResponse loginUser(String usernameOrEmail, String password) throws Exception {
        Authentication authentication = authenticationConfiguration.getAuthenticationManager().authenticate(
                new UsernamePasswordAuthenticationToken(usernameOrEmail, password)
        );

        String token = jwtUtil.generateToken(authentication.getName());

        User user = userRepository.findByUsernameOrEmail(usernameOrEmail,usernameOrEmail)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        return new AuthResponse(token, user);
    }
}
