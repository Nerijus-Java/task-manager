package taskmanager.controller;

import lombok.RequiredArgsConstructor;
import taskmanager.model.Task;
import taskmanager.model.User;
import org.springframework.web.bind.annotation.*;
import taskmanager.repository.TaskRepository;
import taskmanager.repository.UserRepository;

import java.util.List;


@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
public class TaskController {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    @GetMapping("user/{userId}")
    public List<Task> getTasksByUserID(@PathVariable Long userId) {
        return taskRepository.findByUserId(userId);
    }

    @PostMapping("/user/{userId}")
    public Task createTask(@PathVariable long userId, @RequestBody Task task) {

        User user = userRepository.findById(userId).orElseThrow();
        task.setUser(user);

        return taskRepository.save(task);
    }
}
