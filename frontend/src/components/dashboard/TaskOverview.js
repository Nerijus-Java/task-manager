import { Box, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

function TaskOverview({ todoCount, inProgressCount, completedCount }) {
    return (
        <Box sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1, width: '100%' }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1, color: 'text.secondary' }}>
                Task Overview
            </Typography>
            <BarChart
                xAxis={[{ scaleType: 'band', data: ['To Do', 'In Progress', 'Completed'] }]}
                series={[{ data: [todoCount, inProgressCount, completedCount], label: 'Current Tasks' }]}
                height={350}
                colors={['#1976d2']}
                margin={{ top: 20, bottom: 30, left: 40, right: 10 }}
            />
        </Box>
    );
}

export default TaskOverview;