package taskmanager.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import taskmanager.model.Task;
import org.springframework.web.bind.annotation.*;
import taskmanager.service.TaskService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
public class TaskController {

    private final TaskService taskService;

    //GETTERS
    @GetMapping("/my-tasks")
    public ResponseEntity<List<Task>> getMyTasks(Authentication authentication) {
        return ResponseEntity.ok(taskService.getMyTasks(authentication.getName()));
    }

    @GetMapping("/company")
    public ResponseEntity<List<Task>> getCompanyTasks(Authentication authentication) {
        return ResponseEntity.ok(taskService.getCompanyTasks(authentication.getName()));
    }

    //POST
    @PostMapping("/my-tasks")
    public ResponseEntity<Task> createPersonalTask(Authentication authentication, @RequestBody Task task) {
        return ResponseEntity.ok(taskService.createPersonalTask(authentication.getName(), task));
    }

    @PreAuthorize("hasRole('MANAGER') or hasRole('COMPANY') or hasRole('ADMIN')")
    @PostMapping("/assign/{workerId}")
    public ResponseEntity<Task> createTask(@PathVariable long workerId, @RequestBody Task task) {
        return ResponseEntity.ok(taskService.assignTask(workerId, task));
    }

    //PATCH
    @PatchMapping("/{taskId}/status")
    public ResponseEntity<Task> updateTaskStatus(@PathVariable long taskId, @RequestBody Map<String, String> request) {
        return ResponseEntity.ok(taskService.updateTaskStatus(taskId, request.get("status")));
    }

    //DELETE
    @DeleteMapping("/{taskID}")
    public ResponseEntity<?> deleteTask(@PathVariable long taskID) {
        taskService.deleteTask(taskID);
        return ResponseEntity.ok("Task deleted");
    }
}