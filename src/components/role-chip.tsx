import { FC } from 'react';
import { Chip } from '@mui/material';

interface RoleChipProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export const RoleChip: FC<RoleChipProps> = ({ label, isSelected, onClick }) => (
  <Chip label={label} sx={{ p: 2, py: 3, borderRadius: 50, fontSize: { xs: '1rem', sm: '1.25rem' } }} color={isSelected ? 'primary' : 'default'} onClick={onClick} />
);
