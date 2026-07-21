package taskmanager.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import taskmanager.service.UserService;

import java.util.Map;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PutMapping("/{userId}/join-company")
    public ResponseEntity<?> joinCompany(@PathVariable Long userId, @RequestBody Map<String, String> request){
        String companyCode = request.get("companyCode");
        userService.joinCompany(userId,companyCode);
        return ResponseEntity.ok("Joined Company " + companyCode);
    }
}
