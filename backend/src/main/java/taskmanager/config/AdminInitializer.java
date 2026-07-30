package taskmanager.config;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import taskmanager.model.Role;
import taskmanager.model.User;
import taskmanager.repository.UserRepository;

@Component
@RequiredArgsConstructor
public class AdminInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args)  {
        String adminUsername = "ADMIN";
        if (!userRepository.existsUserByUsername(adminUsername)) {
            User admin = new User();
            admin.setUsername(adminUsername);
            admin.setEmail("admin@gmail.com");
            admin.setPassword(passwordEncoder.encode("ADMIN123"));
            admin.setRole(Role.ROLE_ADMIN);

            userRepository.save(admin);
        }
    }
}