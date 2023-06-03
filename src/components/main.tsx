import { FC } from 'react';
import { Box, Button, Card, CardMedia, Grid, Stack, Typography } from '@mui/material';

export const Main: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', alignItems: 'center' }}>
        <Stack spacing={2} sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" component="h1">
            Know your Workforce in <Box sx={(theme) => ({ color: theme.palette.secondary.main })}>No Time</Box>
          </Typography>
          <Typography>
            PeopleKit™ is a workforce management platform that helps you understand your workforce better. It helps you to understand your workforce better by providing you with
            insights into your workforce.
          </Typography>
          <Stack spacing={2} direction="row">
            <Button color="secondary" variant="outlined">
              View Demo
            </Button>
            <Button variant="contained">Contact Us</Button>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <Card
          sx={(theme) => ({
            boxShadow: `4px 4px 15px 0px ${theme.palette.primary.main}55`
          })}
        >
          <CardMedia component="img" image="https://picsum.photos/1600/900" />
        </Card>
      </Grid>
    </Grid>
  );
};
