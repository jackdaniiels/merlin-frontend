import { CircularProgress, Box, Fade } from '@mui/material';

export const Spinner = () => {
    return (
        <Fade>
            <Box
                position="fixed"
                top={0}
                left={0}
                width="100vw"
                height="100vh"
                bgcolor="rgba(0, 0, 0, 0.5)"
                display="flex"
                justifyContent="center"
                alignItems="center"
                zIndex={9999}
            >
                <CircularProgress color="inherit" />
            </Box>
        </Fade>
    )
}
