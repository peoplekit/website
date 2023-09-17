import { Box, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface InfoSectionProps {
  icon: IconProp;
  title: string;
  items: string[];
  subItems?: string[];
}

export const InfoSection: FC<InfoSectionProps> = ({ icon, title, items, subItems }) => {
  const { palette, breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('sm'));
  return (
    <>
      <Grid item sm={4} style={{ textAlign: isMobile ? 'center' : 'right' }} container alignItems="center" justifyContent={isMobile ? 'center' : 'right'}>
        <FontAwesomeIcon icon={icon} size={isMobile ? '3x' : '4x'} color={palette.secondary.main} />
      </Grid>
      <Grid item sm={8}>
        <Stack gap={1}>
          <Typography variant="subtitle1">{title}</Typography>
          {items.map((item, index) => (
            <Typography key={index}>{item}</Typography>
          ))}
          <Box sx={{ ml: 2 }}>
            {subItems?.map((item, index) => (
              <Typography key={index}>{item}</Typography>
            ))}
          </Box>
        </Stack>
      </Grid>
    </>
  );
};
