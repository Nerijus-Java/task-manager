import React from "react";
import { Box, Typography } from "@mui/material";
import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onToggleStatus, onDelete }) {

  if (!tasks || tasks.length === 0) {
    return (
      <Box sx={{ textAlign: "center", mt: 4, p: 3 }}>
        <Typography variant="body1" color="text.secondary">
          No tasks found.
        </Typography>
      </Box>
    );
  }
  return (
    <Box sx={{ mt: 3 }}>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleStatus={onToggleStatus}
          onDelete={onDelete}
        />
      ))}
    </Box>
  );
}