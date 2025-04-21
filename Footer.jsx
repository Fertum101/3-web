import { Box, Container, Typography } from '@mui/material';

const Footer = () => (
  <Box 
    component="footer" 
    py={2}
    color="white"
    sx={{background: 'linear-gradient(45deg, #111111 30%, #999999 60%)'}}
    >
    <Container>
      <Typography align="center">
        © {new Date().getFullYear()} Учебный проект
      </Typography>
    </Container>
  </Box>
);

export default Footer;