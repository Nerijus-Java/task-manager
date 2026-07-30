package taskmanager.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import taskmanager.model.Task;
import org.springframework.web.bind.annotation.*;
import taskmanager.model.User;
import taskmanager.service.TaskService;
import taskmanager.service.UserService;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
public class TaskController {

    private final TaskService taskService;
    private final UserService userService;

    @GetMapping("user/{userId}")
    public ResponseEntity<List<Task>> getTasksByUserID(@PathVariable Long userId) {
        return ResponseEntity.ok(taskService.getTaskByUserID(userId));
    }

    @GetMapping("/my-tasks")
    public ResponseEntity<List<Task>> getMyTasks(Authentication authentication) {
        User currentUser = userService.getUserByUsername(authentication.getName());
        return ResponseEntity.ok(taskService.getTaskByUserID(currentUser.getId()));
    }

    @PostMapping("/assign/{workerId}")
    public ResponseEntity<Task> createTask(@PathVariable long workerId, @RequestBody Task task) {
        return ResponseEntity.ok(taskService.assignTask(workerId,task));
    }

    @PatchMapping("/{taskId}/status")
    public ResponseEntity<Task> updateTaskStatus(@PathVariable long taskId, @RequestBody Map<String, String> request) {
        return ResponseEntity.ok(taskService.updateTaskStatus(taskId, request.get("status")));
    }

    @DeleteMapping("/{taskID}")
    public ResponseEntity<?> deleteTask(@PathVariable long taskID) {
        taskService.deleteTask(taskID);
        return ResponseEntity.ok("Task deleted");
    }
}
