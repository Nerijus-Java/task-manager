import React from "react";
import { Card, Typography, Button, Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TaskCard({ task, onToggleStatus, onDelete }) {
    const isCompleted = task.status === "COMPLETED";

    return (
        <Card
            variant="outlined"
            sx={{
                height: '100%',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 4,
                }
            }}
        >
            <Box sx={{ flex: 1 }}>
                <Typography
                    variant="h6"
                    sx={{
                        textDecoration: isCompleted ? "line-through" : "none",
                        color: isCompleted ? "text.secondary" : "text.primary",
                        fontWeight: 500
                    }}
                >
                    {task.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {task.description}
                </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Button
                    variant={isCompleted ? "outlined" : "contained"}
                    color={isCompleted ? "inherit" : "primary"}
                    size="small"
                    onClick={() => onToggleStatus(task.id, isCompleted ? "PENDING" : "COMPLETED")}
                >
                    {isCompleted ? "Mark Pending" : "Complete"}
                </Button>

                <IconButton
                    color="error"
                    onClick={() => onDelete(task.id)}
                    aria-label="delete"
                >
                    <DeleteIcon />
                </IconButton>
            </Box>
        </Card>
    );
}