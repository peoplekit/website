import { FC } from 'react';
import { Box, Grid, Typography, IconButton, Stack, Container, Toolbar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
  return (
    <>
      <Toolbar /> {/* Buffer Space */}
      <Box component="footer" bgcolor="primary.dark" color="white" py={6} px={2}>
        <Container maxWidth="xl">
          <Grid container spacing={5} justifyContent="center">
            {/* Company Info */}
            <Grid item xs={12} md={4} container alignItems="center" spacing={2} direction="row">
              <Stack direction="row" spacing={3} alignItems="center">
                <img src="/logo.png" alt="PeopleKit Logo" style={{ width: '50px', height: '50px' }} />
                <Typography variant="h4">PeopleKit</Typography>
              </Stack>
              <Typography sx={{ mt: 4 }}>
                At PeopleKit we're not just a tech company, we're your strategic partner in navigating the future of business. With a deep-rooted commitment to innovation and
                understanding we transcend the ordinary to deliver solutions uniquely tailored to your company's aspirations. Contact us today to dive into a partnership that
                prioritizes your success and understands the rhythm of the ever-evolving business landscape.
              </Typography>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Quick Links</Typography>
              <Stack spacing={2} sx={{ mt: 2 }}>
                <Link to="https://demo.peoplekit.com" style={{ textDecoration: 'none' }} target="_blank">
                  <Typography color="white">Demo</Typography>
                </Link>
                <Link to="#contact-us" style={{ textDecoration: 'none' }}>
                  <Typography color="white">Contact Us</Typography>
                </Link>
              </Stack>
            </Grid>

            {/* Social Media */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Follow Us</Typography>
              <Box display="flex" gap={2}>
                <IconButton color="inherit" component="a" href="#">
                  <FontAwesomeIcon color="white" icon={faLinkedinIn as IconProp} />
                </IconButton>
                <IconButton color="inherit" component="a" href="#">
                  <FontAwesomeIcon color="white" icon={faXTwitter as IconProp} />
                </IconButton>
              </Box>
            </Grid>

            {/* Copyright */}
            <Grid item xs={12}>
              <Typography variant="body2" align="center">
                &copy; {new Date().getFullYear()} PeopleKit. All Rights Reserved.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
