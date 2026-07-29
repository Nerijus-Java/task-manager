import { useState } from 'react';
import { Button, Drawer, Typography, Box, TextField, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function AddTaskForm({ open, onClose, onSubmit }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        onSubmit({ title, description, status: 'TODO' });
        setTitle('');
        setDescription('');
        onClose();
    };

    const handleClose = () => {
        setTitle('');
        setDescription('');
        onClose();
    };

    return (
        <Drawer 
            anchor="right" 
            open={open} 
            onClose={handleClose}
            PaperProps={{
                sx: { width: { xs: '100%', sm: 450 }, p: 4, bgcolor: 'background.paper', backgroundImage: 'none' }
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h5" fontWeight="bold" color="text.primary">
                    New Task Card
                </Typography>
                <IconButton onClick={handleClose} size="small" sx={{ color: 'text.secondary' }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            
            <Divider sx={{ mb: 4 }} />

            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Typography variant="caption" color="text.secondary" sx={{ mb: 1, fontWeight: 'bold', letterSpacing: 1 }}>
                    TASK TITLE
                </Typography>
                <TextField
                    autoFocus
                    placeholder="e.g., Update Database Schema"
                    fullWidth
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    sx={{ mb: 3 }}
                />

                <Typography variant="caption" color="text.secondary" sx={{ mb: 1, fontWeight: 'bold', letterSpacing: 1 }}>
                    DESCRIPTION
                </Typography>
                <TextField
                    placeholder="Add task details here..."
                    fullWidth
                    multiline
                    rows={6}
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Box>
            <Box sx={{ mt: 'auto', pt: 3, display: 'flex', gap: 2 }}>
                <Button onClick={handleClose} color="inherit" fullWidth sx={{ fontWeight: 'bold', borderRadius: 2 }}>
                    Cancel
                </Button>
                <Button onClick={handleSubmit} variant="contained" fullWidth sx={{ fontWeight: 'bold', borderRadius: 2 }}>
                    Save Task
                </Button>
            </Box>
        </Drawer>
    );
}

export default AddTaskForm;