import { FC } from 'react';
import { AppBar, Box, Button, Stack, Toolbar, Typography, useTheme } from '@mui/material';

export const Header: FC = () => {
  const theme = useTheme();
  return (
    <AppBar sx={{ backgroundColor: theme.palette.background.paper, color: 'black', boxShadow: 'none' }}>
      <Toolbar>
        <Box component="img" src="/logo.png" sx={{ height: '40px', mr: 2 }} />
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
