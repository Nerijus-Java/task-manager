package taskmanager.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import taskmanager.exception.ResourceNotFoundException;
import taskmanager.model.Company;
import taskmanager.model.Role;
import taskmanager.model.User;
import taskmanager.repository.CompanyRepository;
import taskmanager.repository.UserRepository;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CompanyService {

    private final CompanyRepository companyRepository;
    private final UserRepository userRepository;

    private User getUserByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }

    public User createCompany(String username, String companyName) {
        User user = getUserByUsername(username);

        String sanitizedName = companyName.replaceAll("[^a-zA-Z0-9]", "").toUpperCase();
        if (sanitizedName.isEmpty()) {
            sanitizedName = "COMPANY";
        }

        String companyCode;
        do {
            String randomKey = UUID.randomUUID().toString().substring(0, 6).toUpperCase();
            companyCode = sanitizedName + "-" + randomKey;
        } while (companyRepository.existsByCode(companyCode));

        Company newCompany = new Company();
        newCompany.setName(companyName);
        newCompany.setCode(companyCode);
        newCompany.setOwner(user);
        companyRepository.save(newCompany);

        user.setCompany(newCompany);
        user.setRole(Role.ROLE_COMPANY);

        return userRepository.save(user);
    }

    public void joinCompany(String username, String companyCode) {
        Company company = companyRepository.findByCode(companyCode)
                .orElseThrow(() -> new ResourceNotFoundException("Company with code " + companyCode + " not found!"));

        User user = getUserByUsername(username);

        if (company.getBlacklistedUsers().contains(user)) {
            throw new IllegalStateException("Access denied: You have been banned/blacklisted from this company.");
        }

        user.setCompany(company);
        user.setRole(Role.ROLE_WORKER);

        userRepository.save(user);
    }

    public List<User> getCoworkers(String username) {
        User currentUser = getUserByUsername(username);

        if (currentUser.getCompany() == null) {
            return java.util.Collections.emptyList();
        }

        return userRepository.findByCompanyId(currentUser.getCompany().getId());
    }

    public void promoteToManager(String ownerUsername, Long targetUserId) {
        User owner = getUserByUsername(ownerUsername);

        if (owner.getCompany() == null || !owner.getRole().equals(Role.ROLE_COMPANY)) {
            throw new IllegalStateException("Only company owners can promote users.");
        }

        User targetWorker = userRepository.findById(targetUserId)
                .orElseThrow(() -> new ResourceNotFoundException("Worker not found"));

        if (targetWorker.getCompany() == null || !targetWorker.getCompany().getId().equals(owner.getCompany().getId())) {
            throw new IllegalStateException("This worker does not belong to your company.");
        }

        targetWorker.setRole(Role.ROLE_MANAGER);
        userRepository.save(targetWorker);
    }

    public void demoteManager(String ownerUsername, Long targetUserId) {
        User owner = getUserByUsername(ownerUsername);

        if (owner.getCompany() == null || !owner.getRole().equals(Role.ROLE_COMPANY)) {
            throw new IllegalStateException("Only company owners can demote users.");
        }

        User targetManager = userRepository.findById(targetUserId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        if (targetManager.getCompany() == null || !targetManager.getCompany().getId().equals(owner.getCompany().getId())) {
            throw new IllegalStateException("This user does not belong to your company.");
        }

        targetManager.setRole(Role.ROLE_WORKER);
        userRepository.save(targetManager);
    }

    public void fireAndBlacklistUser(String ownerUsername, Long targetUserId) {
        User owner = getUserByUsername(ownerUsername);

        if (owner.getCompany() == null || !owner.getRole().equals(Role.ROLE_COMPANY)) {
            throw new IllegalStateException("Only company owners can fire users.");
        }

        User targetUser = userRepository.findById(targetUserId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        if (targetUser.getCompany() == null || !targetUser.getCompany().getId().equals(owner.getCompany().getId())) {
            throw new IllegalStateException("This user does not belong to your company.");
        }

        Company company = owner.getCompany();

        company.getBlacklistedUsers().add(targetUser);
        companyRepository.save(company);

        targetUser.setCompany(null);
        targetUser.setRole(Role.ROLE_USER);
        userRepository.save(targetUser);
    }

    public List<User> getBlacklistedUsers(String ownerUsername) {
        User owner = getUserByUsername(ownerUsername);

        if (owner.getCompany() == null || !owner.getRole().equals(Role.ROLE_COMPANY)) {
            throw new IllegalStateException("Only company owners can view the blacklist.");
        }

        return new java.util.ArrayList<>(owner.getCompany().getBlacklistedUsers());
    }

    public void unbanUser(String ownerUsername, Long targetUserId) {
        User owner = getUserByUsername(ownerUsername);

        if (owner.getCompany() == null || !owner.getRole().equals(Role.ROLE_COMPANY)) {
            throw new IllegalStateException("Only company owners can unban users.");
        }

        Company company = owner.getCompany();

        User targetUser = userRepository.findById(targetUserId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        if (!company.getBlacklistedUsers().contains(targetUser)) {
            throw new IllegalStateException("This user is not on the blacklist.");
        }

        company.getBlacklistedUsers().remove(targetUser);
        companyRepository.save(company);
    }
}