import { FC } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export const ContactUs: FC = () => {
  return (
    <>
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <Typography variant="h4" component="h2">
          Contact Us
        </Typography>
        <form action="https://api.web3forms.com/submit" method="POST">
          <div className="h-captcha" data-captcha="true"></div>
          <input type="hidden" name="access_key" value="a960d821-50d8-42e7-9e69-5efe06be3be7" />
          <input type="hidden" name="from_name" value="PeopleKit - Contact Us" />
          <Stack spacing={3}>
            <Stack spacing={3} direction="row" sx={{ width: '100%' }}>
              <TextField name="name" label="Full Name" variant="outlined" fullWidth required />
              <TextField name="email" type="email" label="Email" variant="outlined" fullWidth required />
            </Stack>
            <TextField type="text" name="company" label="Company" variant="outlined" fullWidth required />
            <TextField type="text" name="role" label="Role" variant="outlined" fullWidth required />
            <TextField name="subject" label="Subject" variant="outlined" fullWidth required />
            <TextField name="message" label="Message" variant="outlined" fullWidth multiline rows={4} required />
            <Button endIcon={<FontAwesomeIcon icon={faPaperPlane} />} type="submit" variant="outlined">
              Send
            </Button>
          </Stack>
          <input type="hidden" name="recaptcha_response" id="recaptchaResponse" />
        </form>
      </Stack>
      <script src="https://web3forms.com/client/script.js" async defer></script>
    </>
  );
};
