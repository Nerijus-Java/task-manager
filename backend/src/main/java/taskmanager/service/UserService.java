package taskmanager.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import taskmanager.exception.ResourceNotFoundException;
import taskmanager.model.User;
import taskmanager.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User getUserOrThrow(Long userId){
        return userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User with ID " + userId + " not found"));

    }


    public User joinCompany(Long userid,String companyCode){

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

}
