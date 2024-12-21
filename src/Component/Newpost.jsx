import { Button, TextField, Typography, Container, Box } from '@mui/material';

export default function Newpost() {
    return (
        <Container maxWidth="sm" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Creating New Post
            </Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <TextField
                    label="Post Title"
                    variant="outlined"
                    fullWidth
                />
                <Button variant="contained" color="primary">
                    Create
                </Button>
            </Box>
        </Container>
    );
}
