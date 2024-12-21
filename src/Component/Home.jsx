import Typography from '@mui/material/Typography';
import { Container, Paper, Button } from '@mui/material';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      margin: '0 auto',
      marginTop: '120px', // رفع الصفحة بعد تثبيت AppBar
      height: '100vh', // ملء كامل الصفحة
   
   }}>
      
      {/* Main Content */}
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4" align="center">Welcome to LapShop!</Typography>
        <Typography variant="body1" align="center" sx={{ marginTop: 2 }}>
          Explore our collection of laptops and find the perfect one for you.
        </Typography>

        {/* Featured Products Section */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 4 }}>
          {/* Product Card 1 */}
          <Paper sx={{ padding: 2, margin: 1, flex: '0 0 30%', textAlign: 'center' }}>
            <img src="https://via.placeholder.com/100" alt="Dell" style={{ width: '80%', height: 'auto', maxWidth: '150px', marginBottom: '10px' }} />
            <Typography variant="h6">Dell</Typography>
            <Typography variant="subtitle2" color="text.secondary">Category: Gaming</Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>A high-performance laptop for gaming enthusiasts.</Typography>
            <Typography variant="h6" color="primary" sx={{ marginTop: 1 }}>$1200</Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>Add to Cart</Button>
          </Paper>

          {/* Product Card 2 */}
          <Paper sx={{ padding: 2, margin: 1, flex: '0 0 30%', textAlign: 'center' }}>
            <img src="https://via.placeholder.com/100" alt="Lenovo" style={{ width: '80%', height: 'auto', maxWidth: '150px', marginBottom: '10px' }} />
            <Typography variant="h6">Lenovo</Typography>
            <Typography variant="subtitle2" color="text.secondary">Category: Business</Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>A lightweight laptop ideal for business professionals.</Typography>
            <Typography variant="h6" color="primary" sx={{ marginTop: 1 }}>$950</Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>Add to Cart</Button>
          </Paper>

          {/* Product Card 3 */}
          <Paper sx={{ padding: 2, margin: 1, flex: '0 0 30%', textAlign: 'center' }}>
            <img src="https://via.placeholder.com/100" alt="Toshiba" style={{ width: '80%', height: 'auto', maxWidth: '150px', marginBottom: '10px' }} />
            <Typography variant="h6">Toshiba</Typography>
            <Typography variant="subtitle2" color="text.secondary">Category: Student</Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>An affordable laptop with all essential features for students.</Typography>
            <Typography variant="h6" color="primary" sx={{ marginTop: 1 }}>$700</Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>Add to Cart</Button>
          </Paper>
        </div>
      </Container>

      {/* Footer */}
      <footer style={{ marginTop: '20px', padding: '10px', textAlign: 'center', backgroundColor: '#f1f1f1', width: '100%' }}>
        <Typography variant="body2" color="blue">
          © 2024 LapShop. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}
