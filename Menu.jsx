import { List, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { labs } from '../data/labs';

const Menu = () => (
  <List component="nav">
    {labs.map((lab) => (
      <ListItemButton
        sx={{
            transition: 'all 0.3s',
            '&:hover': {
            transform: 'translateX(10px)',
            backgroundColor: '#f0f0f0'
            }
        }}
        key={lab.id}
        component={Link}
        to={lab.path}
      >
        <ListItemText primary={lab.title} />
      </ListItemButton>
    ))}
  </List>
);

export default Menu;