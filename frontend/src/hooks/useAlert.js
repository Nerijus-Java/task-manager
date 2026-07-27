import { useState, useCallback } from 'react';

export const useAlert = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('success');

    const triggerAlert = useCallback((newMessage, newSeverity = 'success') => {
        setMessage(newMessage);
        setSeverity(newSeverity);
        setOpen(true);
    }, []);

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return {
        alertProps: { open, message, severity, onClose: handleCloseAlert },
        triggerAlert
    };
};