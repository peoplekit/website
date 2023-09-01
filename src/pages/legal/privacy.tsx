import { FC } from 'react';

export const PrivacyPage: FC = () => {
  return (
    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ width: '100%', maxWidth: '1200px' }}>
        <iframe src="/legal/privacy.html" style={{ width: '100%', height: '100vh', border: 'none' }} />
      </div>
    </div>
  );
};
