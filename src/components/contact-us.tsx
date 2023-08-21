import { FC } from 'react';
import { Button, Grid, IconButton, Stack, TextField, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { SectionContent } from '@components/section.content.tsx';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';

export const ContactUs: FC = () => {
  return (
    <SectionContent>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <Typography variant="subtitle2">CONTACT US AND WE'LL GET TO WORK</Typography>
            <Typography variant="h5">Let’s Work Together</Typography>
            <Typography>Please use our contact form to hear from us.</Typography>
            <Typography>We typically reply in less than 1 business day.</Typography>
            <Stack direction="row">
              <Link to="https://www.linkedin.com/company/peoplekitai/" target="_blank">
                <IconButton>
                  <FontAwesomeIcon icon={faLinkedinIn as IconProp} />
                </IconButton>
              </Link>
              <Link to="https://twitter.com/peoplekitai" target="_blank">
                <IconButton>
                  <FontAwesomeIcon icon={faXTwitter as IconProp} />
                </IconButton>
              </Link>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={0} md={6}>
          <form action="https://api.web3forms.com/submit" method="POST">
            <div className="h-captcha" data-captcha="true"></div>
            <input type="hidden" name="access_key" value="a960d821-50d8-42e7-9e69-5efe06be3be7" />
            <input type="hidden" name="from_name" value="PeopleKit - Contact Us" />
            <Stack spacing={3}>
              <Stack spacing={3} direction="row" sx={{ width: '100%' }}>
                <TextField name="firstName" label="First Name" variant="outlined" fullWidth required />
                <TextField name="lastName" label="Last Name" variant="outlined" fullWidth required />
              </Stack>
              <TextField name="email" type="email" label="Work Email" variant="outlined" fullWidth required />
              <TextField type="text" name="role" label="Job Title" variant="outlined" fullWidth required />
              <TextField type="text" name="company" label="Company" variant="outlined" fullWidth required />
              <TextField type="text" name="companySize" label="Company Size" variant="outlined" fullWidth required />
              <TextField name="message" label="Message" variant="outlined" fullWidth multiline rows={4} required />
              <Button endIcon={<FontAwesomeIcon icon={faPaperPlane} />} type="submit" variant="outlined">
                Send
              </Button>
            </Stack>
            <input type="hidden" name="recaptcha_response" id="recaptchaResponse" />
          </form>
        </Grid>
      </Grid>
    </SectionContent>
  );
};
