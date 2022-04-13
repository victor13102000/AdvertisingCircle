import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Message = ({ severity, children }) => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity={severity} >
                {children}
            </Alert>

        </Stack>
    )
}

Message.defaultProps = {
    severity: 'info',
}

export default Message