import { FC } from 'react';
import { Box, Button, Card, Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { SectionContent } from '@components/section.content.tsx';
import { Video } from '@components/video.tsx';

export const Main: FC = () => {
  return (
    <>
      <ParallaxBanner style={{ aspectRatio: '2 / 1', zIndex: -100, width: '100vw', position: 'absolute', top: 0, left: 0, height: '100vh' }}>
        <ParallaxBannerLayer image="/background.webp" speed={-50} />
      </ParallaxBanner>
      <SectionContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <Stack spacing={2} sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '4rem' } }}>
                Know your Workforce
                <Box sx={(theme) => ({ color: theme.palette.secondary.main, fontSize: { xs: '4rem' } })}>
                  in No Time
                </Box>
              </Typography>
              <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' } }}>
                PeopleKit™ is your people analytics platform and consultancy, enabling teams and organizations to achieve the business outcomes you need to thrive
              </Typography>
              <Stack spacing={2} direction="row">
                <Button size="large" component="a" color="secondary" variant="contained" href="https://demo.peoplekit.com" target="_blank">
                  View Demo
                </Button>
                <Link to="#contact-us" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" size="large">
                    Contact Us
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ width: '100%' }}>
              <Video videoId="o6az9F1E8RI" />
            </Card>
          </Grid>
        </Grid>
      </SectionContent>
    </>
  );
};
