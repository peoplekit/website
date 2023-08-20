import { FC } from 'react';
import { AppBar, Box, Button, Stack, Toolbar, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  const theme = useTheme();
  return (
    <AppBar sx={{ backgroundColor: theme.palette.background.paper, color: 'black', boxShadow: 'none' }}>
      <Toolbar>
        <Box component="img" src="/logo.png" sx={{ height: '40px', mr: 2 }} />
        <Typography variant="h6" component="span">
          PeopleKit™
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Stack spacing={2} direction="row">
          <Button component="a" color="secondary" variant="contained" href="https://demo.peoplekit.com" target="_blank">
            View Demo
          </Button>
          <Link to="#contact-us">
            <Button variant="contained">Contact Us</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};