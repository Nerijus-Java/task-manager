package taskmanager.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import taskmanager.model.User;
import taskmanager.service.UserService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PutMapping("/join-company")
    public ResponseEntity<?> joinCompany(Authentication authentication, @RequestBody Map<String, String> request){
        String companyCode = request.get("companyCode");
        User currentUser = userService.getUserByUsername(authentication.getName());

        userService.joinCompany(currentUser.getId(), companyCode);
        return ResponseEntity.ok("Joined Company " + companyCode);
    }

    @GetMapping("/coworkers")
    public ResponseEntity<List<User>> getCoworkers(Authentication authentication) {
        return ResponseEntity.ok(userService.getCoworkers(authentication.getName()));
    }
}
