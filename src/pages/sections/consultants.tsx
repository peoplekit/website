import { FC } from 'react';
import { Button, Grid, Stack, Typography, useTheme } from '@mui/material';
import { SectionContent } from '@components/section.content.tsx';
import { Link } from 'react-router-dom';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

export const Consultants: FC = () => {
  const { palette } = useTheme();
  return (
    <SectionContent>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Stack spacing={6}>
            <Typography variant="subtitle2">ABOUT OUR CONSULTANTS</Typography>
            <Typography variant="h5">
              Derive <span style={{ color: palette.primary.main, fontStyle: 'italic' }}>Actionable Insight</span> from your Workforce
            </Typography>
            <Typography>
              PeopleKit™'s consultants come with deep experience in Human Resources analytics and people analytics powered by advanced technologies through the PeopleKit™ platform
              - tools other consultants can only dream of.
            </Typography>
            <Typography>
              PeopleKit™ consultants can help you take your organization's people analytics from 0 to 60 in no time or assist with targeted projects ranging from advanced analytics
              research projects to developing a skills-oriented workforce plan. Our consultants utilize industry-leading methodologies and best-practices supercharged with the
              PeopleKit™ platform.
            </Typography>
            <Typography>Contact us today to get in touch with our consultants to meet your HR and People Analytics needs.</Typography>
            <Link to="#contact-us" style={{ textDecoration: 'none' }}>
              <Button variant="contained">Contact Us</Button>
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={0} md={6}>
          <ParallaxBanner style={{ aspectRatio: '2 / 1', zIndex: -100, width: '100%', height: '100%', borderRadius: 10 }}>
            <ParallaxBannerLayer image="/consultants.jpg" speed={-20} />
          </ParallaxBanner>
        </Grid>
      </Grid>
    </SectionContent>
  );
};
