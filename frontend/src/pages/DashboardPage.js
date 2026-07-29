import { Container, Box, Grid } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useTasks } from '../hooks/useTasks';

import Sidebar from '../components/sidebar/Sidebar';
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
        <Box sx={{ display: 'flex', height: 'calc(100vh - 65px)', overflow: 'hidden' }}>

            <Sidebar />
            
            <Box component="main" sx={{ flexGrow: 1, height: '100%', overflowY: 'auto' }}>

                <Container maxWidth="xl" sx={{ mt: 4, mb: 6 }}>

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
                    
                </Container>
            </Box>
            
            <AddTaskForm
                open={openForm}
                onClose={() => setOpenForm(false)}
                onSubmit={handleCreateTask}
            />
        </Box>
    );
}

export default Dashboard;