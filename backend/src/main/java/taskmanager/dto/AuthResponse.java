package taskmanager.dto;

import lombok.Getter;
import lombok.Setter;
import taskmanager.model.User;

@Getter
@Setter
public class AuthResponse {
    private String token;

    private User user;

    public AuthResponse(String token, User user) {
        this.token = token;
        this.user = user;
    }
}
