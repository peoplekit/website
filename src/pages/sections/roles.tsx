import { FC, useEffect, useState } from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { SectionContent } from '@components/section.content.tsx';
import { RoleChip } from '@components/role-chip.tsx';
import { RoleContent } from '@components/role-content.tsx';

const rolesData = [
  {
    label: 'Executives',
    image: '/roles/Executive.png',
    title: 'Get real-time analytics, real-fast',
    description: `Using PeopleKit™'s powerful data & analytics platform and state-of-the-art machine-learning models & AI chatbot your time to insights will be quicker than ever before. Lead your organization like never before through unprecedented insights at your fingertips.`
  },
  {
    label: 'HRBPs',
    image: '/roles/HR VP.png',
    title: 'Become an even better partner',
    description: `Be an expert in the organizations you support and guide them with proactive and actionable recommendations derived from their data. PeopleKit's fully self-service onboarding protocols means HR COE's insights don't rely on a vendor's schedule - onboard in a matter of hours, not weeks.`
  },
  {
    label: 'Finance',
    image: '/roles/Finance.png',
    title: 'Stick to your financial plan by keeping a pulse on workforce costs',
    description: `Advance insight in approval flows, hiring & turnover, worker compensation, and aggregate workforce costs - in addition to forecasting and what-if capabilities - you'll get the full picture on one of your companies largest expenses.`
  },
  {
    label: 'Business Leaders',
    image: '/roles/Business Leader.png',
    title: 'Unlock one of your biggest investments: your people',
    description: `Your people leaders and individual contributors drive your business forward - see how they can be supported and pair their people data with business data for optimizing everything from sales through incentives to production lines through absorption rates - all tailored to suite your business' needs.`
  },
  {
    label: 'Managers',
    image: '/roles/Manager.png',
    title: 'Drive performance through actionable insight',
    description: `PeopleKit enables better management through data. Connect dots across data sources about your teams including performance, recruiting, active & passive listening, productivity tools, compensation, benchmarking, sales data and more.`
  },
  {
    label: 'Employees',
    image: '/roles/Employee.png',
    title: 'See your data; Own your data',
    description: `Empower your workforce by enabling them to see the data you have about them, as your organization needs. Enabling workers to view their personal information about performance feedback, office attendance, and more has been shown to better equip them to meet or exceed expectations on the job.`
  }
];

export const Roles: FC = () => {
  const [tab, setTab] = useState(0);
  const [carousel, setCarousel] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTab((prevTab) => (prevTab + 1) % rolesData.length);
    }, 5000);
    setCarousel(interval);

    return () => clearInterval(interval);
  }, []);

  return (
    <SectionContent>
      <Stack spacing={3} sx={{ textAlign: 'center', alignItems: 'center' }}>
        <Typography variant="h2" component="h2">
          The ideal platform, for any role
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {rolesData.map((role, index) => (
            <Grid item xs={6} sm={6} md={4} lg="auto" key={index}>
              <RoleChip
                label={role.label}
                isSelected={tab === index}
                onClick={() => {
                  setTab(index);
                  clearInterval(carousel);
                }}
              />
            </Grid>
          ))}
        </Grid>
        <Box width="100%" display="flex">
          {rolesData.map((role, index) => (
            <RoleContent key={index} roleImage={role.image} title={role.title} description={role.description} isActive={tab === index} />
          ))}
        </Box>
      </Stack>
    </SectionContent>
  );
};
