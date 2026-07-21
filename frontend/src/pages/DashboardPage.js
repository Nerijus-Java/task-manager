import { Container, Divider, Box, Typography } from '@mui/material';
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined';
import PageHeader from '../components/PageHeader';
import FloatingButton from '../components/FloatingButton';

function Dashboard() {

    return (
        <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
            <PageHeader
                title="Dashboard"
                buttonText="Join Company"
                icon={<DomainAddOutlinedIcon />}
                color="primary"
            />

            <Divider sx={{ mb: 4 }} />

            <Box
                sx={{
                    p: 8,
                    textAlign: 'center',
                    borderRadius: 3,
                    borderStyle: 'dashed',
                    borderWidth: 2,
                    borderColor: 'divider',
                    bgcolor: 'background.paper'
                }}
            >
                <Typography variant="h6" color="text.secondary">
                    Your workspace is ready. Click the + button to create a task!
                </Typography>
            </Box>
            <FloatingButton
                tooltipText="Create New Task"
            />
        </Container>
    );

};
export default Dashboard;