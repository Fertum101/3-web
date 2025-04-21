import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
    <AppBar position="static" sx={{ 
        background: 'linear-gradient(45deg, #111111 30%, #999999 60%)'}}>
    <Toolbar>
      <Typography variant="h4">Лабораторные работы</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;