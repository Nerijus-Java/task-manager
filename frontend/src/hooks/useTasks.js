import { useState, useCallback } from 'react';
import { getMyTasks, createPersonalTask, updateTaskStatus, deleteTask } from '../services/ApiService';
import { useSnackbar } from 'notistack';

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const { enqueueSnackbar } = useSnackbar();

    const fetchTasks = useCallback(async () => {
        try {
            const response = await getMyTasks();
            setTasks(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            enqueueSnackbar("Failed to load tasks from server.", { variant: 'error' });
        }
    }, [enqueueSnackbar]);

    const handleCreateTask = async (newTask) => {
        try {
            await createPersonalTask(newTask);
            enqueueSnackbar(`Task ${newTask.title || ''} created successfully!`, { variant: 'success' });
            fetchTasks();
        } catch (error) {
            const backendError = error.response?.data?.message || error.response?.data || "Failed to create task.";
            enqueueSnackbar(backendError, { variant: 'error' });
        }
    };

    const handleToggleStatus = async (taskId, newStatus) => {
        try {
            await updateTaskStatus(taskId, newStatus);
            enqueueSnackbar(`Task successfully marked as ${newStatus}!`, { variant: 'success' });
            fetchTasks();
        } catch (error) {
            const backendError = error.response?.data?.message || error.response?.data || "Failed to update task.";
            enqueueSnackbar(backendError, { variant: 'error' });
            console.error("Error updating status:", error);
        }
    };

    const handleDelete = async (taskId) => {
        try {
            const response = await deleteTask(taskId);
            const successMessage = response.data?.message || response.data || "Task deleted successfully!";
            enqueueSnackbar(successMessage, { variant: 'success' });
            fetchTasks();
        } catch (error) {
            const backendError = error.response?.data?.message || error.response?.data || "Failed to delete task.";
            enqueueSnackbar(backendError, { variant: 'error' });
            console.error("Error deleting task:", error);
        }
    };

    const todoCount = tasks.filter(t => t.status === 'TODO').length;
    const inProgressCount = tasks.filter(t => t.status === 'IN_PROGRESS').length;
    const completedCount = tasks.filter(t => t.status === 'COMPLETED').length;

    return {
        tasks,
        todoCount,
        inProgressCount,
        completedCount,
        fetchTasks,
        handleCreateTask,
        handleToggleStatus,
        handleDelete
    };
};