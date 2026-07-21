import { Box, Button, Typography, Container, Divider, Fab, } from '@mui/material';
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined';
import AddIcon from '@mui/icons-material/Add';

function Dashboard() {

    return (
        <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h1" fontWeight="bold" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                    Dashboad
                </Typography>

                <Button
                    variant="outlined"
                    color="inherit"
                    startIcon={<DomainAddOutlinedIcon />}
                    sx={{ borderRadius: 2, px: 3 }}
                >
                    Join Company
                </Button>

            </Box>

            <Divider />

            <Fab color="primary.main" aria-label="add">
                <AddIcon />
            </Fab>


        </Container>
    );

};
export default Dashboard;