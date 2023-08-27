import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { SectionContent } from '@components/section.content.tsx';

export const BannerExcellence: FC = () => {
  return (
    <SectionContent maxWidth="lg">
      <Stack textAlign="center" sx={{ py: 4 }} gap={3}>
        <Typography variant="h3" color="white">
          PeopleKit™ People Analytics Center of Excellence
        </Typography>
        <Typography variant="h5" color="white">
          More than consultants - Partners
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          gap={6}
          divider={
            <Typography sx={{ py: 3 }} variant="h3" color="white">
              •
            </Typography>
          }
        >
          <Box>
            <Typography variant="h1" color="white">
              20
            </Typography>
            <Typography variant="subtitle1" color="white">
              Years of combined Experience
            </Typography>
          </Box>
          <Box>
            <Typography variant="h1" color="white">
              2
            </Typography>
            <Typography variant="subtitle1" color="white">
              Qualified People Analytics & Technology Experts
            </Typography>
          </Box>
          <Box>
            <Typography variant="h1" color="white">
              1
            </Typography>
            <Typography variant="subtitle1" color="white">
              Industry-Leading People Analytics Platform
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </SectionContent>
  );
};
