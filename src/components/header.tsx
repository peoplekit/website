import { FC } from 'react';
import { AppBar, Avatar, Box, Button, Stack, Toolbar, Typography, useTheme } from '@mui/material';

export const Header: FC = () => {
  const theme = useTheme();
  return (
    <AppBar sx={{ backgroundColor: theme.palette.background.paper, color: 'black', boxShadow: 'none' }}>
      <Toolbar elevation={0}>
        <Avatar sx={{ p: 0.1, mr: 1, backgroundColor: theme.palette.primary }} src="/logo.png" />
        <Typography variant="h6">PeopleKit™</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Stack spacing={2} direction="row">
          <Button color="secondary" variant="outlined">
            View Demo
          </Button>
          <Button variant="contained">Contact Us</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
