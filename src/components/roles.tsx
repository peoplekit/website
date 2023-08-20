import { FC, useEffect, useState } from 'react';
import { Card, CardMedia, Chip, Fade, Grid, Stack, Typography } from '@mui/material';
import { SectionContent } from '@components/section.content.tsx';

export const Roles: FC = () => {
  const [tab, setTab] = useState(0);
  const [carousel, setCarousel] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTab((tab) => (tab + 1) % 6);
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
        <Stack direction="row" spacing={2}>
          <Chip
            label="Executives"
            sx={{ p: 2, py: 3, borderRadius: 50, fontSize: '20px' }}
            color={tab === 0 ? 'primary' : 'default'}
            onClick={() => {
              setTab(0);
              clearInterval(carousel);
            }}
          />
          <Chip
            label="HRBPs"
            sx={{ p: 2, py: 3, borderRadius: 50, fontSize: '20px' }}
            color={tab === 1 ? 'primary' : 'default'}
            onClick={() => {
              setTab(1);
              clearInterval(carousel);
            }}
          />
          <Chip
            label="Finance"
            sx={{ p: 2, py: 3, borderRadius: 50, fontSize: '20px' }}
            color={tab === 2 ? 'primary' : 'default'}
            onClick={() => {
              setTab(2);
              clearInterval(carousel);
            }}
          />
          <Chip
            label="Business Leaders"
            sx={{ p: 2, py: 3, borderRadius: 50, fontSize: '20px' }}
            color={tab === 3 ? 'primary' : 'default'}
            onClick={() => {
              setTab(3);
              clearInterval(carousel);
            }}
          />
          <Chip
            label="Managers"
            sx={{ p: 2, py: 3, borderRadius: 50, fontSize: '20px' }}
            color={tab === 4 ? 'primary' : 'default'}
            onClick={() => {
              setTab(4);
              clearInterval(carousel);
            }}
          />
          <Chip
            label="Employees"
            sx={{ p: 2, py: 3, borderRadius: 50, fontSize: '20px' }}
            color={tab === 5 ? 'primary' : 'default'}
            onClick={() => {
              setTab(5);
              clearInterval(carousel);
            }}
          />
        </Stack>
        {tab === 0 && (
          <Fade in={tab === 0} timeout={1000}>
            <Grid container spacing={5} sx={{ display: tab === 0 ? 'inherit' : 'none' }}>
              <Grid item xs={0} md={1} />
              <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
                <Card>
                  <CardMedia component="img" image="/roles/Executive.png" />
                </Card>
              </Grid>
              <Grid item xs={0} md={1} />
              <Grid item xs={12} md={5} sx={{ display: 'flex', textAlign: 'start' }}>
                <Stack spacing={3}>
                  <Typography variant="subtitle1">Get real-time analytics, real-fast</Typography>
                  <Typography>
                    Using PeopleKit™'s powerful data & analytics platform and state-of-the-art machine-learning models & AI chatbot your time to insights will be quicker than ever
                    before. Lead your organization like never before through unprecedented insights at your fingertips.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Fade>
        )}
        {tab === 1 && (
          <Fade in={tab === 1} timeout={1000}>
            <Grid container spacing={5}>
              <Grid item xs={0} md={1} />
              <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
                <Card>
                  <CardMedia component="img" image="/roles/HR VP.png" />
                </Card>
              </Grid>
              <Grid item xs={0} md={1} />
              <Grid item xs={12} md={5} sx={{ display: 'flex', textAlign: 'start' }}>
                <Stack spacing={3}>
                  <Typography variant="subtitle1">Become an even better partner</Typography>
                  <Typography>
                    Be an expert in the organizations you support and guide them with proactive and actionable recommendations derived from their data. PeopleKit's fully
                    self-service onboarding protocols means HR COE's insights don't rely on a vendor's schedule - onboard in a matter of hours, not weeks.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Fade>
        )}
        {tab === 2 && (
          <Fade in={tab === 2} timeout={1000}>
            <Grid container spacing={5}>
              <Grid item xs={0} md={1} />
              <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
                <Card>
                  <CardMedia component="img" image="/roles/Finance.png" />
                </Card>
              </Grid>
              <Grid item xs={0} md={1} />
              <Grid item xs={12} md={5} sx={{ display: 'flex', textAlign: 'start' }}>
                <Stack spacing={3}>
                  <Typography variant="subtitle1">Stick to your financial plan by keeping a pulse on workforce costs</Typography>
                  <Typography>
                    Advance insight in approval flows, hiring & turnover, worker compensation, and aggregate workforce costs - in addition to forecasting and what-if capabilities -
                    you'll get the full picture on one of your companies largest expenses.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Fade>
        )}
        {tab === 3 && (
          <Fade in={tab === 3} timeout={1000}>
            <Grid container spacing={5}>
              <Grid item xs={0} md={1} />
              <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
                <Card>
                  <CardMedia component="img" image="/roles/Business Leader.png" />
                </Card>
              </Grid>
              <Grid item xs={0} md={1} />
              <Grid item xs={12} md={5} sx={{ display: 'flex', textAlign: 'start' }}>
                <Stack spacing={3}>
                  <Typography variant="subtitle1">Unlock one of your biggest investments: your people</Typography>
                  <Typography>
                    Your people leaders and individual contributors drive your business forward - see how they can be supported and pair their people data with business data for
                    optimizing everything from sales through incentives to production lines through absorption rates - all tailored to suite your business' needs.{' '}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Fade>
        )}
        {tab === 4 && (
          <Fade in={tab === 4} timeout={1000}>
            <Grid container spacing={5}>
              <Grid item xs={0} md={1} />
              <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
                <Card>
                  <CardMedia component="img" image="/roles/Manager.png" />
                </Card>
              </Grid>
              <Grid item xs={0} md={1} />
              <Grid item xs={12} md={5} sx={{ display: 'flex', textAlign: 'start' }}>
                <Stack spacing={3}>
                  <Typography variant="subtitle1">Drive performance through actionable insight </Typography>
                  <Typography>
                    PeopleKit enables better management through data. Connect dots across data sources about your teams including performance, recruiting, active & passive
                    listening, productivity tools, compensation, benchmarking, sales data and more.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Fade>
        )}
        {tab === 5 && (
          <Fade in={tab === 5} timeout={1000}>
            <Grid container spacing={5}>
              <Grid item xs={0} md={1} />
              <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
                <Card>
                  <CardMedia component="img" image="/roles/Employee.png" />
                </Card>
              </Grid>
              <Grid item xs={0} md={1} />
              <Grid item xs={12} md={5} sx={{ display: 'flex', textAlign: 'start' }}>
                <Stack spacing={3}>
                  <Typography variant="subtitle1">See your data; own your data</Typography>
                  <Typography>
                    Empower your workforce by enabling them to see the data you have about them, as your organization needs. Enabling workers to view their personal information
                    about performance feedback, office attendance, and more has been shown to better equip them to meet or exceed expectations on the job.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Fade>
        )}
      </Stack>
    </SectionContent>
  );
};
