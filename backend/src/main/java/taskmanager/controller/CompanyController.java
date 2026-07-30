package taskmanager.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import taskmanager.model.User;
import taskmanager.service.CompanyService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/companies")
@RequiredArgsConstructor
public class CompanyController {

    private final CompanyService companyService;

    //GETTERS
    @GetMapping("/coworkers")
    public ResponseEntity<List<User>> getCoworkers(Authentication authentication) {
        return ResponseEntity.ok(companyService.getCoworkers(authentication.getName()));
    }

    //POST
    @PostMapping("/create")
    public ResponseEntity<?> createCompany(Authentication authentication, @RequestBody Map<String, String> request) {
        String companyName = request.get("companyName");

        User updatedUser = companyService.createCompany(authentication.getName(), companyName);

        return ResponseEntity.ok(Map.of(
                "message", "Company created successfully",
                "companyCode", updatedUser.getCompany().getCode(),
                "role", updatedUser.getRole().name()
        ));
    }

    @PreAuthorize("hasRole('COMPANY') or hasRole('ADMIN')")
    @PostMapping("/fire/{workerId}")
    public ResponseEntity<?> fireAndBlacklistUser(Authentication authentication, @PathVariable Long workerId) {
        companyService.fireAndBlacklistUser(authentication.getName(), workerId);

        return ResponseEntity.ok(Map.of("message", "User has been fired and blacklisted from the company"));
    }

    //PUT
    @PreAuthorize("hasRole('COMPANY') or hasRole('ADMIN')")
    @PatchMapping("/demote/{managerId}")
    public ResponseEntity<?> demoteManager(Authentication authentication, @PathVariable Long managerId) {
        companyService.demoteManager(authentication.getName(), managerId);

        return ResponseEntity.ok(Map.of("message", "Manager successfully demoted to Worker"));
    }

    @PreAuthorize("hasRole('COMPANY') or hasRole('ADMIN')")
    @PatchMapping("/promote/{workerId}")
    public ResponseEntity<?> promoteToManager(Authentication authentication, @PathVariable Long workerId) {
        companyService.promoteToManager(authentication.getName(), workerId);

        return ResponseEntity.ok(Map.of("message", "Worker successfully promoted to Manager"));
    }

    //PUT
    @PutMapping("/join")
    public ResponseEntity<?> joinCompany(Authentication authentication, @RequestBody Map<String, String> request) {
        String companyCode = request.get("companyCode");
        companyService.joinCompany(authentication.getName(), companyCode);

        return ResponseEntity.ok(Map.of("message", "Joined Company " + companyCode));
    }

    @PreAuthorize("hasRole('COMPANY') or hasRole('ADMIN')")
    @GetMapping("/blacklist")
    public ResponseEntity<List<User>> getBlacklistedUsers(Authentication authentication) {
        return ResponseEntity.ok(companyService.getBlacklistedUsers(authentication.getName()));
    }

    //DELETE
    @PreAuthorize("hasRole('COMPANY') or hasRole('ADMIN')")
    @DeleteMapping("/blacklist/{userId}")
    public ResponseEntity<?> unbanUser(Authentication authentication, @PathVariable Long userId) {
        companyService.unbanUser(authentication.getName(), userId);

        return ResponseEntity.ok(Map.of("message", "User has been removed from the blacklist and can now rejoin."));
    }
}