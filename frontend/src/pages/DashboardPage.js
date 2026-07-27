import { Container, Divider, Button } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import PageHeader from '../components/PageHeader';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useTasks } from '../hooks/useTasks';

import TaskMetrics from '../components/dashboard/TaskMetrics';
import TaskOverview from '../components/dashboard/TaskOverview';
import AddTaskForm from '../components/dashboard/AddTaskForm';
import TaskList from '../components/dashboard/TaskList';

function Dashboard() {

    const { currentUser } = useContext(AuthContext);
    const [openForm, setOpenForm] = useState(false);

    const {
        tasks, todoCount, inProgressCount, completedCount,
        fetchTasks, handleCreateTask, handleToggleStatus, handleDelete
    } = useTasks(currentUser?.id);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

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
            <TaskList
                tasks={tasks}
                onToggleStatus={handleToggleStatus}
                onDelete={handleDelete}
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