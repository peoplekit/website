import { FC, useEffect, useState } from 'react';
import { Box, Grid, Stack, Tab, Tabs, Typography, useTheme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus,
  faPeopleRoof,
  faPersonWalkingArrowLoopLeft,
  faUserGraduate,
  faMicrophoneLines,
  faPersonWalkingArrowRight,
  faBookOpenReader,
  faPersonRunning,
  faPersonArrowUpFromLine,
  faScaleUnbalanced,
  faGears
} from '@fortawesome/free-solid-svg-icons';
import { SectionContent } from '@components/section.content.tsx';
import { TabPanel } from '@components/tab-panel.tsx';

export const Modules: FC = () => {
  const [value, setValue] = useState(0);
  const [carousel, setCarousel] = useState<number>(0);

  const { palette } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((tab) => (tab + 1) % 7);
    }, 5000);
    setCarousel(interval);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionContent>
      <Tabs
        sx={{ width: '100%', mt: 6 }}
        value={value}
        variant="fullWidth"
        centered
        onChange={(_, value) => {
          setValue(value);
          clearInterval(carousel);
        }}
      >
        <Tab icon={<FontAwesomeIcon icon={faUserPlus} size="2x" />} label="Recruting" />
        <Tab icon={<FontAwesomeIcon icon={faPeopleRoof} size="2x" />} label="DE&I" />
        <Tab icon={<FontAwesomeIcon icon={faUserGraduate} size="2x" />} label="Development" />
        <Tab icon={<FontAwesomeIcon icon={faPersonWalkingArrowLoopLeft} size="2x" />} label="Retention" />
        <Tab icon={<FontAwesomeIcon icon={faMicrophoneLines} size="2x" />} label="Listing" />
        <Tab icon={<FontAwesomeIcon icon={faPersonWalkingArrowRight} size="2x" />} label="Planning" />
        <Tab icon={<FontAwesomeIcon icon={faBookOpenReader} size="2x" />} label="Skills" />
      </Tabs>
      <TabPanel index={0} value={value}>
        <Grid container spacing={4}>
          <Grid item sm={4} textAlign="right" alignItems="center">
            <FontAwesomeIcon icon={faUserPlus} size="5x" color={palette.secondary.main} />
          </Grid>
          <Grid item sm={8}>
            <Stack gap={1}>
              <Typography variant="subtitle1">Hire More Effectively</Typography>
              <Typography>• Interview feedback, candidate details, and other vital insights in one place</Typography>
              <Typography>• Apply AI insights to your talent pools to find recommended candidates for your roles</Typography>
              <Typography>• Use high-fidelity industry benchmarks to know what good looks like</Typography>
            </Stack>
          </Grid>
          <Grid item sm={4} textAlign="right" alignItems="center">
            <FontAwesomeIcon icon={faPersonArrowUpFromLine} size="5x" color={palette.secondary.main} />
          </Grid>
          <Grid item sm={8}>
            <Stack gap={1}>
              <Typography variant="subtitle1">Improve the Candidate Experience</Typography>
              <Typography>• Applicant & new hire listening posts and NPS surveys</Typography>
              <Typography>• See where candidates fall out of the application funnel</Typography>
              <Typography>• Drive a diverse workforce through the demographic and professional backgrounds of applicants</Typography>
            </Stack>
          </Grid>
          <Grid item sm={4} textAlign="right" alignItems="center">
            <FontAwesomeIcon icon={faPersonRunning} size="5x" color={palette.secondary.main} />
          </Grid>
          <Grid item sm={8}>
            <Stack gap={1}>
              <Typography variant="subtitle1">Speed up Time to Fill</Typography>
              <Typography>• Find bottlenecks in the application & talent acquisition processes</Typography>
              <Typography>• Identify your most impactful hiring sources</Typography>
              <Typography>• View real-time recruiter capacity</Typography>
            </Stack>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel index={1} value={value}>
        <Grid container spacing={4}>
          <Grid item sm={4} textAlign="right" alignItems="center">
            <FontAwesomeIcon icon={faPeopleRoof} size="5x" color={palette.secondary.main} />
          </Grid>
          <Grid item sm={8}>
            <Stack gap={1}>
              <Typography variant="subtitle1">Build trust with underrepresented populations</Typography>
              <Typography>• Robust security keeps demographics confidential</Typography>
              <Typography>• Describe journeys for groups of interest from hire to retire</Typography>
              <Typography>• Take action on the insights from key groups</Typography>
            </Stack>
          </Grid>
          <Grid item sm={4} textAlign="right" alignItems="center">
            <FontAwesomeIcon icon={faGears} size="5x" color={palette.secondary.main} />
          </Grid>
          <Grid item sm={8}>
            <Stack gap={1}>
              <Typography variant="subtitle1">Bring diversity, equity, and inclusion into your flow of work</Typography>
              <Typography>• Demographic filters can be applied across the PeopleKit™ platform</Typography>
            </Stack>
          </Grid>
          <Grid item sm={4} textAlign="right" alignItems="center">
            <FontAwesomeIcon icon={faScaleUnbalanced} size="5x" color={palette.secondary.main} />
          </Grid>
          <Grid item sm={8}>
            <Stack gap={1}>
              <Typography variant="subtitle1">Benchmark yourself against your peers and industry</Typography>
              <Typography>• PeopleKit's robust datasets include benchmarks from:</Typography>
              <Box sx={{ ml: 2 }}>
                <Typography>• Macroeconomic sources</Typography>
                <Typography>• Private 3rd party benchmarks</Typography>
                <Typography>• Securely shared customer organization data</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel index={2} value={value}>
        <></>
      </TabPanel>
      <TabPanel index={3} value={value}>
        <></>
      </TabPanel>
      <TabPanel index={4} value={value}>
        <></>
      </TabPanel>
      <TabPanel index={5} value={value}>
        <></>
      </TabPanel>
      <TabPanel index={6} value={value}>
        <></>
      </TabPanel>
    </SectionContent>
  );
};
