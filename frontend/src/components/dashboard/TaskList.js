import React from "react";
import { Box, Typography, Card, CardActionArea, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onToggleStatus, onDelete, onAddNew }) {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, color: 'text.primary' }}>
        Your Workspace
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card
            elevation={0}
            sx={{
              height: '100%',
              minHeight: 220,
              display: 'flex',
              border: '2px dashed',
              borderColor: 'divider',
              backgroundColor: 'transparent',
              borderRadius: 3,
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                borderColor: 'primary.main',
                bgcolor: 'action.hover',
                transform: 'translateY(-4px)'
              }
            }}
          >
            <CardActionArea
              onClick={onAddNew}
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            >
              <AddIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 1 }} />
              <Typography variant="h6" color="text.secondary" fontWeight="bold">
                Create New Task
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>

        {tasks?.map((task) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={task.id}>
            <TaskCard task={task} onToggleStatus={onToggleStatus} onDelete={onDelete} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}