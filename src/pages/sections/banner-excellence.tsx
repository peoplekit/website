import { FC } from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { SectionContent } from '@components/section.content.tsx';

export const BannerExcellence: FC = () => {
  const { palette } = useTheme();
  return (
    <SectionContent maxWidth="lg">
      <Stack textAlign="center" sx={{ py: 6 }} gap={4}>
        <Typography variant="h2" fontWeight="bold" color="white">
          PeopleKit™ People Analytics Center of Excellence
        </Typography>
        <Typography variant="h4" fontWeight="medium" color="white" sx={{ mb: 3 }}>
          More than consultants - Partners
        </Typography>
        <Stack direction={{ sm: 'column', md: 'row' }} justifyContent="center" gap={2}>
          {[
            { number: '20', subtitle: 'Years of combined Experience' },
            { number: '2', subtitle: 'Qualified People Analytics & Technology Experts' },
            { number: '1', subtitle: 'Industry-Leading People Analytics Platform' }
          ].map((item, idx) => (
            <Box
              key={idx}
              sx={{
                padding: 2,
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  '& > *': {
                    color: palette.secondary.main // Adjust to your desired color
                  }
                }
              }}
            >
              <Typography variant="h1" color="white" fontWeight="bold">
                {item.number}
              </Typography>
              <Typography variant="subtitle1" color="white">
                {item.subtitle}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </SectionContent>
  );
};
