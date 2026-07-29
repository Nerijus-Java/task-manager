import React from "react";
import { Card, Typography, Button, Box, IconButton, Chip, Divider } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TaskCard({ task, onToggleStatus, onDelete }) {
    const isCompleted = task.status === "COMPLETED";

    // Semantic colors
    const getStatusConfig = (status) => {
        if (status === 'TODO') return { color: '#4fc3f7', label: 'To Do', next: 'IN_PROGRESS', btnText: 'Start Task' };
        if (status === 'IN_PROGRESS') return { color: '#ffb74d', label: 'In Progress', next: 'COMPLETED', btnText: 'Mark Complete' };
        if (status === 'COMPLETED') return { color: '#81c784', label: 'Completed', next: 'TODO', btnText: 'Reopen Task' };
        return { color: 'grey', label: status, next: 'TODO', btnText: 'Update' };
    };

    const config = getStatusConfig(task.status);

    return (
        <Card
            elevation={0}
            sx={{
                height: '100%',
                minHeight: 220,
                display: 'flex',
                flexDirection: 'column',
                p: 2.5,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                bgcolor: 'background.paper',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 }
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Chip 
                    label={config.label} 
                    size="small" 
                    sx={{ 
                        bgcolor: `${config.color}15`, 
                        color: config.color, 
                        fontWeight: 'bold',
                        borderRadius: 1
                    }} 
                />
                <IconButton color="error" size="small" onClick={() => onDelete(task.id)}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: isCompleted ? 'text.secondary' : 'text.primary', textDecoration: isCompleted ? 'line-through' : 'none', lineHeight: 1.2 }}>
                    {task.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {task.description}
                </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Button
                variant={isCompleted ? "text" : "contained"}
                color={isCompleted ? "inherit" : "primary"}
                fullWidth
                sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 'bold' }}
                onClick={() => onToggleStatus(task.id, config.next)}
            >
                {config.btnText}
            </Button>
        </Card>
    );
}