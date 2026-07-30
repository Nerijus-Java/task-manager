package taskmanager.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import taskmanager.exception.ResourceNotFoundException;
import taskmanager.model.User;
import taskmanager.repository.UserRepository;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User getUserOrThrow(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User with ID " + userId + " not found"));

    }

    public User joinCompany(Long userid, String companyCode) {

        if (companyCode == null || companyCode.trim().isEmpty()) {
            throw new IllegalArgumentException("Company code cannot be empty");
        }

        if (!userRepository.existsByCompanyCodeAndRole(companyCode, taskmanager.model.Role.ROLE_BUSINESS)) {
            throw new ResourceNotFoundException("Company with code " + companyCode + " not found!");
        }

        User user = getUserOrThrow(userid);
        user.setCompanyCode(companyCode);

        return userRepository.save(user);
    }

    public List<User> getCoworkers(String username) {
        User currentUser = userRepository.findByUsernameOrEmail(username, username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        if (currentUser.getCompanyCode() == null || currentUser.getCompanyCode().trim().isEmpty()) {
            return java.util.Collections.emptyList();
        }

        return userRepository.findByCompanyCode(currentUser.getCompanyCode());
    }

    public User getUserByUsername(String name) {
        return userRepository.findByUsername(name)
                .orElseThrow(() -> new ResourceNotFoundException("User with Username " + name + " not found"));
    }
}
