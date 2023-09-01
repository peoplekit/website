import { FC } from 'react';

export const TermsPage: FC = () => {
  return (
    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ width: '100%', maxWidth: '1200px' }}>
        <iframe src="/legal/terms.html" style={{ width: '100%', height: '100vh', border: 'none' }} />
      </div>
    </div>
  );
};
