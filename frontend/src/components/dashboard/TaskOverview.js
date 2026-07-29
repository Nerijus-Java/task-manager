import { Box, Typography, Card } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

function TaskOverview({ todoCount, inProgressCount, completedCount }) {
    return (
        <Card elevation={0} sx={{ 
            p: 3, 
            height: '100%',
            bgcolor: 'background.paper', 
            borderRadius: 3, 
            border: '1px solid', 
            borderColor: 'divider',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Typography variant="h6" fontWeight="bold" sx={{ color: 'text.primary', mb: 1 }}>
                Overview
            </Typography>
            
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: todoCount, label: 'To Do', color: '#4fc3f7' },
                                { id: 1, value: inProgressCount, label: 'In Progress', color: '#ffb74d' },
                                { id: 2, value: completedCount, label: 'Completed', color: '#81c784' },
                            ],
                            innerRadius: 50,
                            outerRadius: 90,
                            paddingAngle: 3,
                            cornerRadius: 4,
                        }
                    ]}
                    height={200}
                    margin={{ right: 120 }}
                    slotProps={{
                        legend: {
                            labelStyle: { fill: '#b0bec5', fontWeight: 'bold' }
                        }
                    }}
                />
            </Box>
        </Card>
    );
}
export default TaskOverview;