import { FC, useEffect, useState } from 'react';
import { Card, CardMedia, Chip, Fade, Grid, Stack, Tab, Tabs, Typography } from '@mui/material';

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

  console.log(tab);

  return (
    <Stack spacing={3} sx={{ textAlign: 'center', alignItems: 'center' }}>
      <Typography variant="h4" component="h2">
        The ideal platform for any role
      </Typography>
      <Grid container spacing={2} sx={{ display: 'flex', textAlign: 'center', alignItems: 'center' }}>
        <Grid item xs={6} sm={4} md={2}>
          <Chip
            label="Executive"
            sx={{ p: 2, py: 3, borderRadius: 50 }}
            color={tab === 0 ? 'primary' : 'default'}
            onClick={() => {
              setTab(0);
              clearInterval(carousel);
            }}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Chip
            label="HRBPs"
            sx={{ p: 2, py: 3, borderRadius: 50 }}
            color={tab === 1 ? 'primary' : 'default'}
            onClick={() => {
              setTab(1);
              clearInterval(carousel);
            }}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Chip
            label="Finance"
            sx={{ p: 2, py: 3, borderRadius: 50 }}
            color={tab === 2 ? 'primary' : 'default'}
            onClick={() => {
              setTab(2);
              clearInterval(carousel);
            }}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Chip
            label="Business"
            sx={{ p: 2, py: 3, borderRadius: 50 }}
            color={tab === 3 ? 'primary' : 'default'}
            onClick={() => {
              setTab(3);
              clearInterval(carousel);
            }}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Chip
            label="Managers"
            sx={{ p: 2, py: 3, borderRadius: 50 }}
            color={tab === 4 ? 'primary' : 'default'}
            onClick={() => {
              setTab(4);
              clearInterval(carousel);
            }}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Chip
            label="Employees"
            sx={{ p: 2, py: 3, borderRadius: 50 }}
            color={tab === 5 ? 'primary' : 'default'}
            onClick={() => {
              setTab(5);
              clearInterval(carousel);
            }}
          />
        </Grid>
      </Grid>
      {tab === 0 && (
        <Fade in={tab === 0} timeout={1000}>
          <Grid container spacing={5} sx={{ display: tab === 0 ? 'inherit' : 'none' }}>
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
                  Executive
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc massa, ullamcorper nec elementum quis, porttitor vitae nisl. Ut maximus, mauris vel
                  pretium sodales, magna massa convallis risus, ac tincidunt elit urna id eros. Vivamus vitae eros ultrices, pretium ipsum ut, ultrices ipsum. Nunc in sem
                  vulputate, tincidunt nisi eget, posuere ligula.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Fade>
      )}
      {tab === 1 && (
        <Fade in={tab === 1} timeout={1000}>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc massa, ullamcorper nec elementum quis, porttitor vitae nisl. Ut maximus, mauris vel
                  pretium sodales, magna massa convallis risus, ac tincidunt elit urna id eros. Vivamus vitae eros ultrices, pretium ipsum ut, ultrices ipsum. Nunc in sem
                  vulputate, tincidunt nisi eget, posuere ligula.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Fade>
      )}
      {tab === 2 && (
        <Fade in={tab === 2} timeout={1000}>
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
                  Finance
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc massa, ullamcorper nec elementum quis, porttitor vitae nisl. Ut maximus, mauris vel
                  pretium sodales, magna massa convallis risus, ac tincidunt elit urna id eros. Vivamus vitae eros ultrices, pretium ipsum ut, ultrices ipsum. Nunc in sem
                  vulputate, tincidunt nisi eget, posuere ligula.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Fade>
      )}
      {tab === 3 && (
        <Fade in={tab === 3} timeout={1000}>
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
                  Business
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc massa, ullamcorper nec elementum quis, porttitor vitae nisl. Ut maximus, mauris vel
                  pretium sodales, magna massa convallis risus, ac tincidunt elit urna id eros. Vivamus vitae eros ultrices, pretium ipsum ut, ultrices ipsum. Nunc in sem
                  vulputate, tincidunt nisi eget, posuere ligula.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Fade>
      )}
      {tab === 4 && (
        <Fade in={tab === 4} timeout={1000}>
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
                  Managers
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc massa, ullamcorper nec elementum quis, porttitor vitae nisl. Ut maximus, mauris vel
                  pretium sodales, magna massa convallis risus, ac tincidunt elit urna id eros. Vivamus vitae eros ultrices, pretium ipsum ut, ultrices ipsum. Nunc in sem
                  vulputate, tincidunt nisi eget, posuere ligula.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Fade>
      )}
      {tab === 5 && (
        <Fade in={tab === 5} timeout={1000}>
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
                  Employees
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc massa, ullamcorper nec elementum quis, porttitor vitae nisl. Ut maximus, mauris vel
                  pretium sodales, magna massa convallis risus, ac tincidunt elit urna id eros. Vivamus vitae eros ultrices, pretium ipsum ut, ultrices ipsum. Nunc in sem
                  vulputate, tincidunt nisi eget, posuere ligula.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Fade>
      )}
    </Stack>
  );
};
