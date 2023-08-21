import { FC, useEffect, useState } from 'react';
import { Box, Grid, Stack, Tab, Tabs, Typography, useTheme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAward,
  faBinoculars,
  faBookOpenReader,
  faComments,
  faEyeSlash,
  faFileShield,
  faGears,
  faHeadphones,
  faListUl,
  faMagnifyingGlassChart,
  faMapLocationDot,
  faMicrophoneLines,
  faPeopleRoof,
  faPersonArrowUpFromLine,
  faPersonRunning,
  faPersonWalkingArrowLoopLeft,
  faPersonWalkingArrowRight,
  faScaleUnbalanced,
  faSignsPost,
  faStopwatch20,
  faUserGraduate,
  faUserPlus
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
        <Tab icon={<FontAwesomeIcon icon={faUserPlus} size="2x" />} label="Talent Acquisition" />
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
        <Grid container spacing={4}>
          <Grid item sm={4} textAlign="right" alignItems="center">
            <FontAwesomeIcon icon={faAward} size="5x" color={palette.secondary.main} />
          </Grid>
          <Grid item sm={8}>
            <Stack gap={1}>
              <Typography variant="subtitle1">Set high-quality and actionable goals</Typography>
              <Typography>• NLP analytics on workforce goals to assess quality and impact</Typography>
              <Typography>• Goal completion & feedback rates</Typography>
              <Typography>• Goal-setting best practices</Typography>
            </Stack>
          </Grid>
          <Grid item sm={4} textAlign="right" alignItems="center">
            <FontAwesomeIcon icon={faMagnifyingGlassChart} size="5x" color={palette.secondary.main} />
          </Grid>
          <Grid item sm={8}>
            <Stack gap={1}>
              <Typography variant="subtitle1">Learnings insights - like a pro</Typography>
              <Typography>• Visualize data from all your LMS's in one place</Typography>
              <Typography>• Assess learning's impact on your organization</Typography>
              <Typography>• Course completion compliance tracking</Typography>
            </Stack>
          </Grid>
          <Grid item sm={4} textAlign="right" alignItems="center">
            <FontAwesomeIcon icon={faSignsPost} size="5x" color={palette.secondary.main} />
          </Grid>
          <Grid item sm={8}>
            <Stack gap={1}>
              <Typography variant="subtitle1">Internal movement and career pathing</Typography>
              <Typography>• See how workers move within your organization</Typography>
              <Typography>• Promotion, demotion, and lateral movement rates</Typography>
              <Typography>• Career sourcing based on your workforce</Typography>
            </Stack>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel index={3} value={value}>
        <Grid container spacing={4}>
          <Grid item sm={4} textAlign="right" alignItems="center">
            <FontAwesomeIcon icon={faListUl} size="5x" color={palette.secondary.main} />
          </Grid>
          <Grid item sm={8}>
            <Stack gap={1}>
              <Typography variant="subtitle1">Driver analyses providing tangible actions to take</Typography>
              <Typography>• What’s causing workers to leave?</Typography>
              <Typography>• What’s causing workers to stay?</Typography>
              <Typography>• What locations and teams have the highest retention?</Typography>
            </Stack>
          </Grid>
          <Grid item sm={4} textAlign="right" alignItems="center">
            <FontAwesomeIcon icon={faBinoculars} size="5x" color={palette.secondary.main} />
          </Grid>
          <Grid item sm={8}>
            <Stack gap={1}>
              <Typography variant="subtitle1">Look around corners</Typography>
              <Typography>• Retention and attrition rate predictions for groups</Typography>
              <Typography>• Flight risk calculation on individuals</Typography>
              <Typography>• Model design & customization to suite your workforce</Typography>
            </Stack>
          </Grid>
          <Grid item sm={4} textAlign="right" alignItems="center">
            <FontAwesomeIcon icon={faScaleUnbalanced} size="5x" color={palette.secondary.main} />
          </Grid>
          <Grid item sm={8}>
            <Stack gap={1}>
              <Typography variant="subtitle1">Compare yourself to others</Typography>
              <Typography>• See what good looks like through industry benchmark</Typography>
              <Typography>• Set goals for select organizations using internal criteria or external benchmarks</Typography>
              <Typography>• Get alerts when organizations rise above their targets or see a rapid increase in attrition</Typography>
            </Stack>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel index={4} value={value}>
        <Grid container spacing={4}>
          <Grid item sm={4} textAlign="right" alignItems="center">
            <FontAwesomeIcon icon={faHeadphones} size="5x" color={palette.secondary.main} />
          </Grid>
          <Grid item sm={8}>
            <Stack gap={1}>
              <Typography variant="subtitle1">Active and Passive Listening</Typography>
              <Typography>• Active Listening through Engagement, Pulse, Onboarding, and Exit surveys</Typography>
              <Typography>
                • Passive Listening through productivity (GitHub; Saleforce; JIRA; Confluence), collaboration (), and work (office ultilization, badge taps, benefits usage, commute
                info) tools.
              </Typography>
              <Typography>• Ad Hoc surveys for every use case and every population</Typography>
            </Stack>
          </Grid>
          <Grid item sm={4} textAlign="right" alignItems="center">
            <FontAwesomeIcon icon={faComments} size="5x" color={palette.secondary.main} />
          </Grid>
          <Grid item sm={8}>
            <Stack gap={1}>
              <Typography variant="subtitle1">Statistically cutting-edge</Typography>
              <Typography>• Adaptive sampling avoiding survey fatigue and delivering quality responses</Typography>
              <Typography>• Results modeling suggesting actions for actionable listening</Typography>
              <Typography>• Driver analyses and predicted affects of interventions</Typography>
            </Stack>
          </Grid>
          <Grid item sm={4} textAlign="right" alignItems="center">
            <FontAwesomeIcon icon={faEyeSlash} size="5x" color={palette.secondary.main} />
          </Grid>
          <Grid item sm={8}>
            <Stack gap={1}>
              <Typography variant="subtitle1">Privacy above all else</Typography>
              <Typography>• Open, Confidential, and Anonymous surveys</Typography>
              <Typography>• Ability to view one’s own responses</Typography>
              <Typography>• Right to be forgotten compliant</Typography>
            </Stack>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel index={5} value={value}>
        <Grid container spacing={4}>
          <Grid item sm={4} textAlign="right" alignItems="center">
            <FontAwesomeIcon icon={faMapLocationDot} size="5x" color={palette.secondary.main} />
          </Grid>
          <Grid item sm={8}>
            <Stack gap={1}>
              <Typography variant="subtitle1">Strategic Workforce Planning at your fingertips</Typography>
              <Typography>• Set organizational goals, budgets, and plans cascading them stakeholders</Typography>
              <Typography>• Define capacity required (labor demand) and capacity available (labor supply) under an array of plans and scenarios</Typography>
              <Typography>• Add granularity of positions along the way, starting with simple headcount’s that develop into clearly defined roles</Typography>
            </Stack>
          </Grid>
          <Grid item sm={4} textAlign="right" alignItems="center">
            <FontAwesomeIcon icon={faStopwatch20} size="5x" color={palette.secondary.main} />
          </Grid>
          <Grid item sm={8}>
            <Stack gap={1}>
              <Typography variant="subtitle1">Dynamic, real-time planning</Typography>
              <Typography>• Use your most up to date data</Typography>
              <Typography>• Change plans as your progress through a quarter, reacting to real-time events</Typography>
              <Typography>• Use your people data (including turnover, engagement, and performance) to automatically adapt your plan</Typography>
            </Stack>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel index={6} value={value}>
        <Grid container spacing={4}>
          <Grid item sm={4} textAlign="right" alignItems="center">
            <FontAwesomeIcon icon={faMapLocationDot} size="5x" color={palette.secondary.main} />
          </Grid>
          <Grid item sm={8}>
            <Stack gap={1}>
              <Typography variant="subtitle1">Let us map skills for you</Typography>
              <Typography>• Use AI to map your skills to a normalized, industry-wide taxonomy</Typography>
              <Typography>• Identify gaps in your workforce’s skills, high demand skills based on your open roles, and where skills could flow within the organization</Typography>
              <Typography>• Tie in Workforce Planning to assess skill requirements in your workforce planning</Typography>
            </Stack>
          </Grid>
          <Grid item sm={4} textAlign="right" alignItems="center">
            <FontAwesomeIcon icon={faAward} size="5x" color={palette.secondary.main} />
          </Grid>
          <Grid item sm={8}>
            <Stack gap={1}>
              <Typography variant="subtitle1">Drive outcomes with skills goals</Typography>
              <Typography>• Leader can identify the skills they need to power their outcomes, including the proficiency each role has in that skill</Typography>
              <Typography>• Upskill your current workforce for the future with gap identification and in-system training</Typography>
              <Typography>• Skills are pervasive throughout PeopleKit, built into recruiting, position details, workforce planning, and learning</Typography>
            </Stack>
          </Grid>
          <Grid item sm={4} textAlign="right" alignItems="center">
            <FontAwesomeIcon icon={faFileShield} size="5x" color={palette.secondary.main} />
          </Grid>
          <Grid item sm={8}>
            <Stack gap={1}>
              <Typography variant="subtitle1">Validate skills with proof-of-work</Typography>
              <Typography>• Leaders can validate experiences of teams. Peers can validate the skills of their peers</Typography>
              <Typography>• Self-identified and validated proficiency levels in skills & capabilities</Typography>
              <Typography>• In-system knowledge checks further validate skills</Typography>
            </Stack>
          </Grid>
        </Grid>
      </TabPanel>
    </SectionContent>
  );
};
