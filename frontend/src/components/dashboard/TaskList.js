import React, { useState } from "react";
import { Box, Typography, Card, CardActionArea, Grid, ToggleButtonGroup, ToggleButton,Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TaskCard from "./TaskCard";
import CompactTaskCard from "./CompactTaskForm";
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';

export default function TaskList({ tasks, onToggleStatus, onDelete, onAddNew }) {
  const [view, setView] = useState('grid');

  return (

    <Box sx={{ mt: 2 }}>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5" fontWeight="bold" sx={{ color: 'text.primary' }}>
          Your Workspace
        </Typography>
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={(e, newView) => { if (newView) setView(newView); }}
          size="small"
          sx={{ height: 32 }}
        >
          <ToggleButton value="grid"><ViewModuleIcon fontSize="small" /></ToggleButton>
          <ToggleButton value="list"><ViewListIcon fontSize="small" /></ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box>

        {view === 'grid' ? (
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Card elevation={0} sx={{ height: '100%', minHeight: 220, display: 'flex', border: '2px dashed', borderColor: 'divider', backgroundColor: 'transparent', borderRadius: 3, transition: 'all 0.2s ease-in-out', '&:hover': { borderColor: 'primary.main', bgcolor: 'action.hover', transform: 'translateY(-4px)' } }}>
                <CardActionArea onClick={onAddNew} sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <AddIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 1 }} />
                  <Typography variant="h6" color="text.secondary" fontWeight="bold">Create New Task</Typography>
                </CardActionArea>
              </Card>
            </Grid>
            {tasks?.map((task) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={task.id}>
                <TaskCard task={task} onToggleStatus={onToggleStatus} onDelete={onDelete} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box>
            <Button startIcon={<AddIcon />} variant="outlined" fullWidth sx={{ mb: 3, py: 1.5, borderStyle: 'dashed', borderWidth: 2, borderRadius: 2, color: 'text.secondary', borderColor: 'divider', '&:hover': { borderWidth: 2 } }} onClick={onAddNew}>
              Create New Task
            </Button>
            {tasks?.map((task) => (
              <CompactTaskCard key={task.id} task={task} onToggleStatus={onToggleStatus} onDelete={onDelete} />
            ))}
          </Box>
        )}

      </Box>
    </Box>
  );
}