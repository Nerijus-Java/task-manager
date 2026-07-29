import { Container, Box, Grid } from '@mui/material';
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


        <Container maxWidth="xl" sx={{ mt: 6, mb: 8 }}>

            <Box sx={{ mb: 4 }}>
                <PageHeader
                    title="Dashboard"
                />
            </Box>

            <Grid container spacing={4} sx={{ mb: 4 }}>
                <Grid size={{ xs: 12, lg: 7 }}>
                    <TaskMetrics
                        todoCount={todoCount}
                        inProgressCount={inProgressCount}
                        completedCount={completedCount}
                    />
                </Grid>
                <Grid size={{ xs: 12, lg: 5 }}>
                    <TaskOverview
                        todoCount={todoCount}
                        inProgressCount={inProgressCount}
                        completedCount={completedCount}
                    />
                </Grid>
            </Grid>

            <TaskList
                tasks={tasks}
                onToggleStatus={handleToggleStatus}
                onDelete={handleDelete}
                onAddNew={() => setOpenForm(true)}
            />

            <AddTaskForm
                open={openForm}
                onClose={() => setOpenForm(false)}
                onSubmit={handleCreateTask}
            />
        </Container>
    );
}

export default Dashboard;