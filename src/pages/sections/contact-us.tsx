import { FC } from 'react';
import { Grid, IconButton, Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { SectionContent } from '@components/section.content.tsx';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { useMutation } from '@apollo/client';
import { useSnackbar } from '../../contexts/snackbar.context.tsx';
import { CONTACT_US_DOCUMENT } from '@graphql/graphql.ts';
import { LoadingButton } from '@mui/lab';
import { TextInput } from '@components/forms/text.input.tsx';
import { AutoCompleteInput } from '@components/forms/auto-complete-input.tsx';

export const ContactUs: FC = () => {
  const { pushMessage } = useSnackbar();
  const [contactUs] = useMutation(CONTACT_US_DOCUMENT);
  return (
    <SectionContent>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={6}>
          <Stack spacing={2}>
            <Typography variant="subtitle2">Let’s Work Together</Typography>
            <Typography variant="h5">Contact us and we'll get to work</Typography>
            <Typography>Please use our contact form to hear from us.</Typography>
            <Typography>We typically reply in less than 1 business day.</Typography>
            <Stack direction="row">
              <Link to="https://www.linkedin.com/company/peoplekitai/" target="_blank" style={{ textDecoration: 'none' }}>
                <IconButton>
                  <FontAwesomeIcon icon={faLinkedinIn as IconProp} />
                </IconButton>
              </Link>
              <Link to="https://twitter.com/peoplekitai" target="_blank" style={{ textDecoration: 'none' }}>
                <IconButton>
                  <FontAwesomeIcon icon={faXTwitter as IconProp} />
                </IconButton>
              </Link>
            </Stack>
          </Stack>
        </Grid>
        <Grid item sm={12} md={6}>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              jobTitle: '',
              company: '',
              headcount: '',
              message: ''
            }}
            onSubmit={async (values, formikHelpers) => {
              await contactUs({
                variables: {
                  firstName: values.firstName,
                  lastName: values.lastName,
                  email: values.email,
                  jobTitle: values.jobTitle,
                  company: values.company,
                  headcount: values.headcount,
                  message: values.message
                }
              });
              pushMessage('Thank you for contacting us! We will get back to you shortly.', 'success');
              formikHelpers.setSubmitting(false);
              formikHelpers.resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Stack spacing={3}>
                  <Stack spacing={3} direction="row" sx={{ width: '100%' }}>
                    <TextInput name="firstName" label="First Name" variant="outlined" fullWidth required autoComplete="given-name" />
                    <TextInput name="lastName" label="Last Name" variant="outlined" fullWidth required autoComplete="family-name" />
                  </Stack>
                  <TextInput name="email" type="email" label="Work Email" variant="outlined" fullWidth required autoComplete="email" />
                  <TextInput type="text" name="jobTitle" label="Job Title" variant="outlined" fullWidth required />
                  <TextInput type="text" name="company" label="Company" variant="outlined" fullWidth required />
                  <AutoCompleteInput
                    disabled={isSubmitting}
                    name="headcount"
                    textFieldProps={{ label: 'Company Size', variant: 'outlined', required: true }}
                    fullWidth
                    options={['1-500', '500-1,000', '1,000-5,000', '5,000-10,000', '10,000+']}
                  />
                  <TextInput name="message" label="Message" variant="outlined" fullWidth multiline rows={4} required disabled={isSubmitting} />
                  <LoadingButton endIcon={<FontAwesomeIcon icon={faPaperPlane} />} type="submit" variant="outlined" loading={isSubmitting} disabled={isSubmitting}>
                    Send
                  </LoadingButton>
                </Stack>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </SectionContent>
  );
};
