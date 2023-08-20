import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';

export interface TabPanelProps {
  index: number;
  value: number;
  children: ReactNode;
}

export const TabPanel: FC<TabPanelProps> = ({ value, index, children }) => {
  return (
    <div role="tabpanel" hidden={value !== index} id={`full-width-tabpanel-${index}`} aria-labelledby={`full-width-tab-${index}`}>
      {value === index && <Box sx={{ py: 12 }}>{children}</Box>}
    </div>
  );
};
