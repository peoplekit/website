import { FC } from 'react';
import { Box } from '@mui/material';

export interface VideoProps {
  videoId: string;
}

export const Video: FC<VideoProps> = ({ videoId }) => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', width: '100%', paddingTop: '49%' }}>
      <iframe
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, width: '100%', height: '100%', border: 'none' }}
        id="ytplayer"
        width="640"
        height="360"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?si=pywu5qpo4E1r9qvL&loop=1&autoplay=1&controls=0&mute=1&version=3&playlist=${videoId}`}
      ></iframe>
    </Box>
  );
};
