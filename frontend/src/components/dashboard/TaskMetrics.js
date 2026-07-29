import { Grid, Card, Typography } from '@mui/material';

function TaskMetrics({ todoCount, inProgressCount, completedCount }) {
    const metrics = [
        { title: 'TO DO', count: todoCount, color: '#4fc3f7' },
        { title: 'IN PROGRESS', count: inProgressCount, color: '#ffb74d' },
        { title: 'COMPLETED', count: completedCount, color: '#81c784' }
    ];

    return (
        <Grid container spacing={3} sx={{ height: '100%' }}>
            {metrics.map((metric, index) => (
                <Grid size={{ xs: 12, sm: 4 }} key={index}>
                    <Card
                        elevation={0}
                        sx={{
                            p: 3,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 3,
                            bgcolor: 'background.paper',
                            borderTop: `4px solid ${metric.color}`
                        }}
                    >
                        <Typography variant="h2" fontWeight="bold" sx={{ color: 'text.primary', mb: 1 }}>
                            {metric.count}
                        </Typography>
                        <Typography color="text.secondary" variant="overline" fontWeight="bold" letterSpacing={1}>
                            {metric.title}
                        </Typography>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
export default TaskMetrics;