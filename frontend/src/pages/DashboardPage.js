import { Container, Divider, Button } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import PageHeader from '../components/PageHeader';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { createTask, getTasks } from '../services/ApiService';

import TaskMetrics from '../components/dashboard/TaskMetrics';
import TaskOverview from '../components/dashboard/TaskOverview.js'
import AddTaskForm from '../components/dashboard/AddTaskForm';


function Dashboard() {

    const { currentUser } = useContext(AuthContext);

    const [tasks, setTasks] = useState([]);
    const [openForm, setOpenForm] = useState(false);

    const fechTasks = async () => {
        try {
            const response = await getTasks(currentUser.id);
            if (Array.isArray(response.data)) {
                setTasks(response.data);
            } else {
                setTasks([]);
            }
        } catch (error) {

            console.error("Error fetching tasks:", error)
        };
    };

    useEffect(() => {
        if (currentUser?.id) {
            fechTasks();
        }
    }, [currentUser]);


    const handleCreateTask = async (newTask) => {
        try {
            await createTask(newTask, currentUser.id);
            setOpenForm(false);
            fechTasks();
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };

    const safeTasks = Array.isArray(tasks) ? tasks : [];
    const todoCount = safeTasks.filter(t => t.status === 'TODO').length;
    const inProgressCount = safeTasks.filter(t => t.status === 'IN_PROGRESS').length;
    const completedCount = safeTasks.filter(t => t.status === 'COMPLETED').length;


    return (
        <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
            <PageHeader title="Dashboard" />

            <Divider sx={{ mb: 4 }} />

            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() => setOpenForm(true)}
            >
                Add Task
            </Button>
            <TaskMetrics
                todoCount={todoCount}
                inProgressCount={inProgressCount}
                completedCount={completedCount}
            />

            <TaskOverview
                todoCount={todoCount}
                inProgressCount={inProgressCount}
                completedCount={completedCount}
            />

            <AddTaskForm
                open={openForm}
                onClose={() => setOpenForm(false)}
                onSubmit={handleCreateTask}
            />
        </Container>
    );
};
export default Dashboard;