import { FC, useEffect, useState } from 'react';
import { Grid, Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';
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
import { InfoSection, InfoSectionProps } from '@components/info-section.tsx';

const sections: InfoSectionProps[][] = [
  [
    {
      icon: faUserPlus,
      title: 'Hire More Effectively',
      items: [
        'Interview feedback, candidate details, and other vital insights in one place',
        'Apply AI insights to your talent pools to find recommended candidates for your roles',
        'Use high-fidelity industry benchmarks to know what good looks like'
      ]
    },
    {
      icon: faPersonArrowUpFromLine,
      title: 'Improve the Candidate Experience',
      items: [
        'Applicant & new hire listening posts and NPS surveys',
        'See where candidates fall out of the application funnel',
        'Drive a diverse workforce through the demographic and professional backgrounds of applicants'
      ]
    },
    {
      icon: faPersonRunning,
      title: 'Speed up Time to Fill',
      items: ['Find bottlenecks in the application & talent acquisition processes', 'Identify your most impactful hiring sources', 'View real-time recruiter capacity']
    }
  ],
  [
    {
      icon: faPeopleRoof,
      title: 'Build trust with underrepresented populations',
      items: ['Robust security keeps demographics confidential', 'Describe journeys for groups of interest from hire to retire', 'Take action on the insights from key groups']
    },
    {
      icon: faGears,
      title: 'Bring diversity, equity, and inclusion into your flow of work',
      items: ['Demographic filters can be applied across the PeopleKit™ platform']
    },
    {
      icon: faScaleUnbalanced,
      title: 'Benchmark yourself against your peers and industry',
      items: ["PeopleKit's robust datasets include benchmarks from:"],
      subItems: ['Macroeconomic sources', 'Private 3rd party benchmarks', 'Securely shared customer organization data']
    }
  ],
  [
    {
      icon: faAward,
      title: 'Set high-quality and actionable goals',
      items: ['NLP analytics on workforce goals to assess quality and impact', 'Goal completion & feedback rates', 'Goal-setting best practices']
    },
    {
      icon: faMagnifyingGlassChart,
      title: 'Learnings insights - like a pro',
      items: ["Visualize data from all your LMS's in one place", "Assess learning's impact on your organization", 'Course completion compliance tracking']
    },
    {
      icon: faSignsPost,
      title: 'Internal movement and career pathing',
      items: ['See how workers move within your organization', 'Promotion, demotion, and lateral movement rates', 'Career sourcing based on your workforce']
    }
  ],
  [
    {
      icon: faListUl,
      title: 'Driver analyses providing tangible actions to take',
      items: ['What’s causing workers to leave?', 'What’s causing workers to stay?', 'What locations and teams have the highest retention?']
    },
    {
      icon: faBinoculars,
      title: 'Look around corners',
      items: ['Retention and attrition rate predictions for groups', 'Flight risk calculation on individuals', 'Model design & customization to suite your workforce']
    },
    {
      icon: faScaleUnbalanced,
      title: 'Compare yourself to others',
      items: [
        'See what good looks like through industry benchmark',
        'Set goals for select organizations using internal criteria or external benchmarks',
        'Get alerts when organizations rise above their targets or see a rapid increase in attrition'
      ]
    }
  ],
  [
    {
      icon: faHeadphones,
      title: 'Active and Passive Listening',
      items: [
        'Active Listening through Engagement, Pulse, Onboarding, and Exit surveys',
        'Passive Listening through productivity (GitHub; Saleforce; JIRA; Confluence), collaboration (), and work (office ultilization, badge taps, benefits usage, commute info) tools.',
        'Ad Hoc surveys for every use case and every population'
      ]
    },
    {
      icon: faComments,
      title: 'Statistically cutting-edge',
      items: [
        'Adaptive sampling avoiding survey fatigue and delivering quality responses',
        'Results modeling suggesting actions for actionable listening',
        'Driver analyses and predicted affects of interventions'
      ]
    },
    {
      icon: faEyeSlash,
      title: 'Privacy above all else',
      items: ['Open, Confidential, and Anonymous surveys', 'Ability to view one’s own responses', 'Right to be forgotten compliant']
    }
  ],
  [
    {
      icon: faMapLocationDot,
      title: 'Strategic Workforce Planning at your fingertips',
      items: [
        'Set organizational goals, budgets, and plans cascading them stakeholders',
        'Define capacity required (labor demand) and capacity available (labor supply) under an array of plans and scenarios',
        'Add granularity of positions along the way, starting with simple headcount’s that develop into clearly defined roles'
      ]
    },
    {
      icon: faStopwatch20,
      title: 'Dynamic, real-time planning',
      items: [
        'Use your most up to date data',
        'Change plans as your progress through a quarter, reacting to real-time events',
        'Use your people data (including turnover, engagement, and performance) to automatically adapt your plan'
      ]
    }
  ],
  [
    {
      icon: faMapLocationDot,
      title: 'Let us map skills for you',
      items: [
        'Use AI to map your skills to a normalized, industry-wide taxonomy',
        'Identify gaps in your workforce’s skills, high demand skills based on your open roles, and where skills could flow within the organization',
        'Tie in Workforce Planning to assess skill requirements in your workforce planning'
      ]
    },
    {
      icon: faAward,
      title: 'Drive outcomes with skills goals',
      items: [
        'Leader can identify the skills they need to power their outcomes, including the proficiency each role has in that skill',
        'Upskill your current workforce for the future with gap identification and in-system training',
        'Skills are pervasive throughout PeopleKit, built into recruiting, position details, workforce planning, and learning'
      ]
    },
    {
      icon: faFileShield,
      title: 'Validate skills with proof-of-work',
      items: [
        'Leaders can validate experiences of teams. Peers can validate the skills of their peers',
        'Self-identified and validated proficiency levels in skills & capabilities',
        'In-system knowledge checks further validate skills'
      ]
    }
  ]
];

export const Modules: FC = () => {
  const [value, setValue] = useState(0);
  const [carousel, setCarousel] = useState<number>(0);

  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('sm'));

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
        orientation={isMobile ? 'vertical' : 'horizontal'}
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
      {sections.map((section, index) => (
        <TabPanel key={index} index={index} value={value}>
          <Grid container spacing={4}>
            {section.map((s, index) => (
              <InfoSection key={index} {...s} />
            ))}
          </Grid>
        </TabPanel>
      ))}
    </SectionContent>
  );
};
