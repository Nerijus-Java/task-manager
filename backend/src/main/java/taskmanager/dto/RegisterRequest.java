package taskmanager.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter @Setter
public class RegisterRequest {
    private String username;
    private String email;
    private String password;
    private LocalDate dateOfBirth;
}
