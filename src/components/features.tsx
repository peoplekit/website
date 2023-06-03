import { FC, useEffect, useState } from 'react';
import { Stack, Tab, Tabs, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChess, faHeadphones, faPersonHiking, faRotate, faScaleBalanced, faUserPlus, faWheelchairMove } from '@fortawesome/free-solid-svg-icons';

function a11yProps(index: number) {
  return {
    id: `tabs-${index}`,
    'aria-controls': `tabpanel-${index}`
  };
}

export const Features: FC = () => {
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
        Features worthy of a 22nd century people analytics team
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
        <Tab icon={<FontAwesomeIcon icon={faUserPlus} />} label="Recruiting" {...a11yProps(0)} />
        <Tab icon={<FontAwesomeIcon icon={faWheelchairMove} />} label="DE&I" {...a11yProps(1)} />
        <Tab icon={<FontAwesomeIcon icon={faPersonHiking} />} label="Development" {...a11yProps(2)} />
        <Tab icon={<FontAwesomeIcon icon={faRotate} />} label="Retention" {...a11yProps(3)} />
        <Tab icon={<FontAwesomeIcon icon={faHeadphones} />} label="Listening" {...a11yProps(4)} />
        <Tab icon={<FontAwesomeIcon icon={faScaleBalanced} />} label="Planning" {...a11yProps(5)} />
        <Tab icon={<FontAwesomeIcon icon={faChess} />} label="Skills" {...a11yProps(5)} />
      </Tabs>
    </Stack>
  );
};
