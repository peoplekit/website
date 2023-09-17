import { FC } from 'react';
import { Card, CardMedia, Fade, Grid, Stack, Typography } from '@mui/material';

interface RoleContentProps {
  roleImage: string;
  title: string;
  description: string;
  isActive: boolean;
}

export const RoleContent: FC<RoleContentProps> = ({ roleImage, title, description, isActive }) => (
  <Fade in={isActive} timeout={1000}>
    <Grid container spacing={2} sx={{ display: isActive ? 'inherit' : 'none' }}>
      {/* For smaller screens, the image will take up 12 columns (full width).
           For medium and larger screens, it will take up 4 columns as in your original design. */}
      <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: { xs: '75%', md: '60%' } }}>
          {' '}
          {/* Limiting width on mobile screens */}
          <CardMedia component="img" image={roleImage} />
        </Card>
      </Grid>

      {/* Text description will also take full width on smaller screens and your desired
           width on medium and larger screens. */}
      <Grid item xs={12} md={6} sx={{ display: 'flex', textAlign: { xs: 'center', md: 'start' }, flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
        <Stack spacing={3} sx={{ py: 4 }}>
          <Typography variant="subtitle1">{title}</Typography>
          <Typography>{description}</Typography>
        </Stack>
      </Grid>
    </Grid>
  </Fade>
);
