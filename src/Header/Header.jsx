

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

export default function Header() {
  return (
    <AppBar style={{backgroundColor:"blue",width:"100vw"}} position="fixed" color="primary" sx={{ boxShadow: 3 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          LapShop Web Site
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" color="primary" component={Link} to="/" sx={{ borderRadius: 2 }}>
            Home
          </Button>
          <Button variant="outlined" color="inherit" component={Link} to="/Categories" sx={{ borderRadius: 2 }}>
            Categories
          </Button>
          <Button variant="outlined" color="inherit" component={Link} to="/Items" sx={{ borderRadius: 2 }}>
            Items
          </Button>
          <Button variant="outlined" color="inherit" component={Link} to="/Posts" sx={{ borderRadius: 2 }}>
            Posts
          </Button>
          <Button variant="outlined" color="inherit" component={Link} to="/Cart" sx={{ borderRadius: 2 }}>
            Cart
          </Button>


         
        </Box>
      </Toolbar>
    </AppBar>
  );
}
