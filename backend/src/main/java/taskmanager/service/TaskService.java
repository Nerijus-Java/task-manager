package taskmanager.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import taskmanager.exception.ResourceNotFoundException;
import taskmanager.model.Task;
import taskmanager.model.TaskStatus;
import taskmanager.model.User;
import taskmanager.repository.TaskRepository;

import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;
    private final UserService userService;

    public Task getTaskOrThrow(Long taskId) {
        Optional<Task> taskOptional = taskRepository.findById(taskId);
        if (taskOptional.isEmpty()) {
            throw new ResourceNotFoundException("Task with ID " + taskId + " not found");
        }
        return taskOptional.get();
    }

    public Task updateTaskStatus(Long taskId, String statusString) {
        Task task = getTaskOrThrow(taskId);

        try {
            task.setStatus(TaskStatus.valueOf(statusString.toUpperCase()));
        } catch (IllegalArgumentException e) {
            throw new RuntimeException("Invalid task status!");
        }
        return taskRepository.save(task);
    }

    public Task assignTask(Long workerId, Task task) {
        User worker = userService.getUserOrThrow(workerId);
        task.setUser(worker);
        return taskRepository.save(task);
    }

    public List<Task> getTaskByUserID(Long userId) {
        return taskRepository.findByUserId(userId);
    }

    public void deleteTask(long taskId) {
        Task task = getTaskOrThrow(taskId);
        taskRepository.delete(task);
    }
}
