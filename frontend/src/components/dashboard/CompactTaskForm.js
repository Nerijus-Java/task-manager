import React, { useState } from "react";
import { Card, Typography, Button, Box, IconButton, Chip, Divider, Collapse } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CompactTaskCard({ task, onToggleStatus, onDelete }) {
    const [expanded, setExpanded] = useState(false);
    
    const isCompleted = task.status === "COMPLETED";

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
                mb: 1.5,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                bgcolor: 'background.paper',
                transition: 'border-color 0.2s',
                '&:hover': {
                    borderColor: config.color,
                }
            }}
        >
            <Box 
                onClick={() => setExpanded(!expanded)}
                sx={{ 
                    p: 2, 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2,
                    cursor: 'pointer',
                }}
            >
                <Chip 
                    label={config.label} 
                    size="small" 
                    sx={{ bgcolor: `${config.color}15`, color: config.color, fontWeight: 'bold', borderRadius: 1, minWidth: 90 }} 
                />
                <Typography 
                    variant="subtitle1" 
                    noWrap
                    sx={{ flexGrow: 1, fontWeight: 600, textDecoration: isCompleted ? 'line-through' : 'none', color: isCompleted ? 'text.secondary' : 'text.primary' }}
                >
                    {task.title}
                </Typography>

                <IconButton 
                    color="error" 
                    size="small" 
                    onClick={(e) => {
                        e.stopPropagation(); 
                        onDelete(task.id);
                    }}
                >
                    <DeleteIcon fontSize="small" />
                </IconButton>

                <IconButton 
                    size="small" 
                    sx={{ 
                        transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', 
                        transition: 'transform 0.3s ease' 
                    }}
                >
                    <ExpandMoreIcon />
                </IconButton>
            </Box>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Box sx={{ px: 2, pb: 2 }}>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {task.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button 
                            variant={isCompleted ? "text" : "contained"} 
                            color={isCompleted ? "inherit" : "primary"} 
                            size="small" 
                            sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 'bold' }} 
                            onClick={(e) => {
                                e.stopPropagation();
                                onToggleStatus(task.id, config.next);
                            }}
                        >
                            {config.btnText}
                        </Button>
                    </Box>
                </Box>
            </Collapse>
        </Card>
    );
}