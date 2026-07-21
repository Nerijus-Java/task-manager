package taskmanager.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import taskmanager.model.User;
import taskmanager.repository.UserRepository;

import java.util.Map;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    @PutMapping("/{userId}/join-company")
    public ResponseEntity<?> joinCompany(@PathVariable Long userId, @RequestBody Map<String, String> request){
        String companyCode = request.get("companyCode");

        if (companyCode == null || companyCode.trim().isEmpty()){
            return ResponseEntity.badRequest().body("Company code cannot be empty");
        }

        User user = userRepository.findById(userId).orElseThrow(() ->new RuntimeException("User not found"));

        user.setCompanyCode(companyCode);
        userRepository.save(user);

        return ResponseEntity.ok("Joined Company " + companyCode);
    }
}
