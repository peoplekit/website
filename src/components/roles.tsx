import { FC, useEffect, useState } from 'react';
import { Card, CardMedia, Fade, Grid, Stack, Tab, Tabs, Typography } from '@mui/material';

function a11yProps(index: number) {
  return {
    id: `tabs-${index}`,
    'aria-controls': `tabpanel-${index}`
  };
}

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
    <Stack spacing={3} sx={{ textAlign: 'center', alignItems: 'center' }}>
      <Typography variant="h4" component="h2">
        The ideal platform for any role
      </Typography>
      <Tabs
        value={tab}
        onChange={(_, value) => {
          setTab(value);
          clearInterval(carousel);
        }}
        variant="fullWidth"
        sx={(theme) => ({
          width: '100%',
          '& .MuiTabs-indicator': {
            display: 'none'
          },
          '& .MuiTab-root': {
            borderRadius: '50px',
            transition: 'all .5s',
            m: 2,
            backgroundColor: theme.palette.action.disabled
          },
          '& .Mui-selected': {
            backgroundColor: theme.palette.primary.light,
            color: 'white !important'
          }
        })}
      >
        <Tab label="Executive" {...a11yProps(0)} />
        <Tab label="HRBPs" {...a11yProps(1)} />
        <Tab label="Finance" {...a11yProps(2)} />
        <Tab label="Business" {...a11yProps(3)} />
        <Tab label="Managers" {...a11yProps(4)} />
        <Tab label="Employees" {...a11yProps(5)} />
      </Tabs>
      <Fade in={tab === 0} timeout={1000} sx={{ display: tab === 0 ? 'inherit' : 'none' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <Card
              sx={(theme) => ({
                boxShadow: `4px 4px 15px 0px ${theme.palette.primary.main}55`
              })}
            >
              <CardMedia component="img" image="https://picsum.photos/1600/900?random=0" />
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={8} sx={{ display: 'flex', textAlign: 'start' }}>
            <Stack spacing={3}>
              <Typography variant="h5" component="h3">
                Executive
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc massa, ullamcorper nec elementum quis, porttitor vitae nisl. Ut maximus, mauris vel pretium
                sodales, magna massa convallis risus, ac tincidunt elit urna id eros. Vivamus vitae eros ultrices, pretium ipsum ut, ultrices ipsum. Nunc in sem vulputate,
                tincidunt nisi eget, posuere ligula.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Fade>
      <Fade in={tab === 1} timeout={1000} sx={{ display: tab === 1 ? 'inherit' : 'none' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <Card
              sx={(theme) => ({
                boxShadow: `4px 4px 15px 0px ${theme.palette.primary.main}55`
              })}
            >
              <CardMedia component="img" image="https://picsum.photos/1600/900?random=1" />
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={8} sx={{ display: 'flex', textAlign: 'start' }}>
            <Stack spacing={3}>
              <Typography variant="h5" component="h3">
                HRBPs
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc massa, ullamcorper nec elementum quis, porttitor vitae nisl. Ut maximus, mauris vel pretium
                sodales, magna massa convallis risus, ac tincidunt elit urna id eros. Vivamus vitae eros ultrices, pretium ipsum ut, ultrices ipsum. Nunc in sem vulputate,
                tincidunt nisi eget, posuere ligula.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Fade>
      <Fade in={tab === 2} timeout={1000} sx={{ display: tab === 2 ? 'inherit' : 'none' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <Card
              sx={(theme) => ({
                boxShadow: `4px 4px 15px 0px ${theme.palette.primary.main}55`
              })}
            >
              <CardMedia component="img" image="https://picsum.photos/1600/900?random=2" />
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={8} sx={{ display: 'flex', textAlign: 'start' }}>
            <Stack spacing={3}>
              <Typography variant="h5" component="h3">
                Finance
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc massa, ullamcorper nec elementum quis, porttitor vitae nisl. Ut maximus, mauris vel pretium
                sodales, magna massa convallis risus, ac tincidunt elit urna id eros. Vivamus vitae eros ultrices, pretium ipsum ut, ultrices ipsum. Nunc in sem vulputate,
                tincidunt nisi eget, posuere ligula.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Fade>
      <Fade in={tab === 3} timeout={1000} sx={{ display: tab === 3 ? 'inherit' : 'none' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <Card
              sx={(theme) => ({
                boxShadow: `4px 4px 15px 0px ${theme.palette.primary.main}55`
              })}
            >
              <CardMedia component="img" image="https://picsum.photos/1600/900?random=3" />
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={8} sx={{ display: 'flex', textAlign: 'start' }}>
            <Stack spacing={3}>
              <Typography variant="h5" component="h3">
                Business
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc massa, ullamcorper nec elementum quis, porttitor vitae nisl. Ut maximus, mauris vel pretium
                sodales, magna massa convallis risus, ac tincidunt elit urna id eros. Vivamus vitae eros ultrices, pretium ipsum ut, ultrices ipsum. Nunc in sem vulputate,
                tincidunt nisi eget, posuere ligula.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Fade>
      <Fade in={tab === 4} timeout={1000} sx={{ display: tab === 4 ? 'inherit' : 'none' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <Card
              sx={(theme) => ({
                boxShadow: `4px 4px 15px 0px ${theme.palette.primary.main}55`
              })}
            >
              <CardMedia component="img" image="https://picsum.photos/1600/900?random=4" />
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={8} sx={{ display: 'flex', textAlign: 'start' }}>
            <Stack spacing={3}>
              <Typography variant="h5" component="h3">
                Managers
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc massa, ullamcorper nec elementum quis, porttitor vitae nisl. Ut maximus, mauris vel pretium
                sodales, magna massa convallis risus, ac tincidunt elit urna id eros. Vivamus vitae eros ultrices, pretium ipsum ut, ultrices ipsum. Nunc in sem vulputate,
                tincidunt nisi eget, posuere ligula.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Fade>
      <Fade in={tab === 5} timeout={1000} sx={{ display: tab === 5 ? 'inherit' : 'none' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <Card
              sx={(theme) => ({
                boxShadow: `4px 4px 15px 0px ${theme.palette.primary.main}55`
              })}
            >
              <CardMedia component="img" image="https://picsum.photos/1600/900?random=5" />
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={8} sx={{ display: 'flex', textAlign: 'start' }}>
            <Stack spacing={3}>
              <Typography variant="h5" component="h3">
                Employees
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc massa, ullamcorper nec elementum quis, porttitor vitae nisl. Ut maximus, mauris vel pretium
                sodales, magna massa convallis risus, ac tincidunt elit urna id eros. Vivamus vitae eros ultrices, pretium ipsum ut, ultrices ipsum. Nunc in sem vulputate,
                tincidunt nisi eget, posuere ligula.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Fade>
    </Stack>
  );
};
