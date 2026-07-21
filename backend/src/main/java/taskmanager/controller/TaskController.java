package taskmanager.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("user/{userId}")
    public ResponseEntity<List<Task>> getTasksByUserID(@PathVariable Long userId) {
        return ResponseEntity.ok(taskService.getTaskByUserID(userId));
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
