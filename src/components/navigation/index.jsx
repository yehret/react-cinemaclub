import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';

import Hidden from '@mui/material/Hidden';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <Link to="/settings">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={'Settings'} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Hidden only={['lg', 'xl']}>
            <IconButton
              onClick={() => toggleDrawer()}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">CinemaClub</Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
            <Link to="/settings">
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>Settings</Button>
            </Link>
          </Box>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>

      <Drawer anchor={'left'} open={isDrawerOpen} onClose={() => toggleDrawer()}>
        {list()}
      </Drawer>
    </Box>
  );
};

export default Navigation;
