package taskmanager.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import taskmanager.model.Task;
import taskmanager.model.User;
import org.springframework.web.bind.annotation.*;
import taskmanager.repository.TaskRepository;
import taskmanager.repository.UserRepository;

import java.util.List;
import java.util.Map;


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

    @PostMapping("/assign/{workerId}")
    public ResponseEntity<?> createTask(@PathVariable long workerId, @RequestBody Task task) {

        User user = userRepository.findById(workerId).orElseThrow(() -> new RuntimeException("Worker not found"));
        task.setUser(user);

        Task savedTask = taskRepository.save(task);

        return ResponseEntity.ok(savedTask);
    }

    @PatchMapping("/{taskId/status}")
    public ResponseEntity<?> updateTaskStatus(@PathVariable long taskId, @RequestBody Map<String, String> request) {

        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        String status = request.get("status");

        try {
            task.setStatus(taskmanager.model.TaskStatus.valueOf(status.toUpperCase()));
        } catch (IllegalArgumentException | NullPointerException e) {
            return ResponseEntity.badRequest().body("Invalid task status!");
        }

        Task updatedTask = taskRepository.save(task);
        return ResponseEntity.ok(updatedTask);
    }

    @DeleteMapping("/{taskID}")
    public ResponseEntity<?> deleteTask(@PathVariable long taskID) {
        if (!taskRepository.existsById(taskID)){
            return ResponseEntity.badRequest().body("Cannot delete: Task not found");
        }

        taskRepository.deleteById(taskID);

        return ResponseEntity.ok("Task deleted");
    }
}
