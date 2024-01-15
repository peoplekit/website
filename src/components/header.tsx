import { FC, useState } from 'react';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Paths } from '@constants/paths.ts';

export const Header: FC = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.background.paper, color: 'black', boxShadow: 'none' }}>
      <Toolbar>
        <Box component="img" src="/logo.png" sx={{ height: { xs: '30px', md: '40px' }, mr: 2 }} />
        <Typography variant="h6" component="span" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, mr: 2 }}>
          PeopleKit
          <Typography
            component="span"
            sx={{
              verticalAlign: 'super',
              fontSize: '0.5rem'
            }}
          >
            ®
          </Typography>
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        {/* Mobile navigation */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton color="inherit" aria-label="Menu" onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose} component={Link} to={Paths.PLATFORM}>
              Platform
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to={Paths.CONSULTING}>
              Consultants
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Button component="a" color="secondary" variant="contained" href={Paths.DEMO} target="_blank">
                View Demo
              </Button>
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to={Paths.CONTACT_US}>
              <Button variant="contained">Contact Us</Button>
            </MenuItem>
          </Menu>
        </Box>
        {/* Desktop navigation */}
        <Stack spacing={2} direction="row" sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Link to="#platform" style={{ textDecoration: 'none' }}>
            <Button>Platform</Button>
          </Link>
          <Link to="#consultants" style={{ textDecoration: 'none' }}>
            <Button>Consultants</Button>
          </Link>
          <Button component="a" color="secondary" variant="contained" href={Paths.DEMO} target="_blank">
            View Demo
          </Button>
          <Link to={Paths.CONTACT_US} style={{ textDecoration: 'none' }}>
            <Button variant="contained">Contact Us</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
