import { Snackbar, Alert } from '@mui/material';

function CustomAlert({ open, message, severity, onClose }) {
  return (
    <Snackbar 
      open={open} 
      autoHideDuration={4000} 
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert 
        onClose={onClose} 
        severity={severity} 
        variant="filled"
        sx={{ 
          width: '100%', 
          // Custom dark blue for success, standard red for error
          bgcolor: severity === 'success' ? '#0b3d91' : '#d32f2f' 
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default CustomAlert;