import { Grid, Card, CardContent, Typography } from '@mui/material';

function TaskMetrics({ todoCount, inProgressCount, completedCount }) {
    return (

        <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid size={4}>
                <Card elevation={2} sx={{ textAlign: 'center', py: 2 }}>
                    <CardContent>
                        <Typography color="text.secondary" fontWeight="bold" gutterBottom>
                            TO DO
                        </Typography>
                        <Typography variant="h3" color="error.main">
                            {todoCount}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid size={4}>
                <Card elevation={2} sx={{ textAlign: 'center', py: 2 }}>
                    <CardContent>
                        <Typography color="text.secondary" fontWeight="bold" gutterBottom>
                            IN PROGRESS
                        </Typography>
                        <Typography variant="h3" color="warning.main">
                            {inProgressCount}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid size={4}>
                <Card elevation={2} sx={{ textAlign: 'center', py: 2 }}>
                    <CardContent>
                        <Typography color="text.secondary" fontWeight="bold" gutterBottom>
                            COMPLETED
                        </Typography>
                        <Typography variant="h3" color="success.main">
                            {completedCount}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default TaskMetrics;