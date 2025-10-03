import { FC } from 'react';
import { Box, Button, Card, Stack, Typography } from '@mui/material';
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
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems="center">
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Stack spacing={2} sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.3rem', sm: '3rem', md: '4rem' },
                  lineHeight: { xs: 1.15, sm: 1.2, md: 1.2 },
                  wordBreak: 'break-word'
                }}
              >
                Optimizing People &amp; Agents
                <br />
                <Box
                  sx={(theme) => ({
                    color: theme.palette.secondary.main,
                    fontSize: { xs: '2.3rem', sm: '3rem', md: '4rem' },
                    lineHeight: { xs: 1.15, sm: 1.2, md: 1.2 },
                    display: 'inline'
                  })}
                >
                  for the Future of Work
                </Box>
              </Typography>
              <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.15rem' } }}>
                PeopleKit is your AI‑native resource intelligence platform, transforming workforce data into clarity, insight, and action.
              </Typography>
              <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} sx={{ width: '100%', justifyContent: 'center' }}>
                <Button size="large" component="a" color="secondary" variant="contained" href="https://demo.peoplekit.com" target="_blank">
                  View Demo
                </Button>
                <Button size="large" component="a" color="primary" variant="contained" href="#contact-us">
                  Contact Us
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Box sx={{ flex: 1, width: '100%', maxWidth: 600, mx: 'auto' }}>
            <Card sx={{ width: '100%' }}>
              <Video videoId="o6az9F1E8RI" />
            </Card>
          </Box>
        </Stack>
      </SectionContent>
    </>
  );
};
