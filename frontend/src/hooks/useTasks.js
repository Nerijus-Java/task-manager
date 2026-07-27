import { useState, useCallback } from 'react';
import { getTasks, createTask, updateTaskStatus, deleteTask } from '../services/ApiService';

export const useTasks = (userId) => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = useCallback(async () => {
        if (!userId) return;
        try {
            const response = await getTasks(userId);
            setTasks(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    }, [userId]);

    const handleCreateTask = async (newTask) => {
        try {
            await createTask(newTask, userId);
            fetchTasks();
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };

    const handleToggleStatus = async (taskId, newStatus) => {
        try {
            await updateTaskStatus(taskId, { status: newStatus });
            fetchTasks();
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const handleDelete = async (taskId) => {
        try {
            await deleteTask(taskId);
            fetchTasks();
        } catch (error) {
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
export default useTasks;