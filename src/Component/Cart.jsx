import { useState } from 'react';
import { Typography, Container, Paper, Button, IconButton, Box, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Cart() { 
    // بيانات مؤقتة للعناصر الموجودة في السلة مع روابط الصور
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Toshiba', price: 1000, quantity: 1, image: 'https://via.placeholder.com/70' },
        { id: 2, name: 'Dell', price: 1200, quantity: 2, image: 'https://via.placeholder.com/70' },
        { id: 3, name: 'Lenovo', price: 900, quantity: 1, image: 'https://via.placeholder.com/70' },
    ]);

    // لحساب الإجمالي
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // إزالة عنصر من السلة
    const handleRemove = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <Container maxWidth="lg" sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: "100vw" }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ color: '#424242', fontWeight: 'bold' }}>
                My Cart
            </Typography>

            {cartItems.length > 0 ? (
                <Stack spacing={2} sx={{ width: '100%', maxWidth: 800 }}>
                    {cartItems.map((item) => (
                        <Paper key={item.id} sx={{ padding: 2, backgroundColor: '#f5f5f5', boxShadow: 2 }}>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Box display="flex" alignItems="center">
                                    <img src={item.image} alt={item.name} style={{ width: 70, height: 70, objectFit: 'cover', marginRight: 16 }} />
                                    <Box>
                                        <Typography variant="h6" sx={{ color: '#1976d2' }}>{item.name}</Typography>
                                        <Typography variant="body2">Price: ${item.price}</Typography>
                                        <Typography variant="body2">Quantity: {item.quantity}</Typography>
                                    </Box>
                                </Box>
                                <Box textAlign="right">
                                    <Typography variant="h6" sx={{ color: '#388e3c' }}>Total: ${item.price * item.quantity}</Typography>
                                    <IconButton color="error" onClick={() => handleRemove(item.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Paper>
                    ))}
                    <Paper sx={{ padding: 2, marginTop: 2, textAlign: 'right', backgroundColor: '#e0f7fa', boxShadow: 2 }}>
                        <Typography variant="h5">Total: ${calculateTotal()}</Typography>
                        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                            Proceed to Checkout
                        </Button>
                    </Paper>
                </Stack>
            ) : (
                <Typography variant="h6" align="center" color="textSecondary">
                    Your cart is empty.
                </Typography>
            )}
        </Container>
    );
}
