import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {PostHogProvider} from "posthog-js/react";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PostHogProvider apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY} options={{
      api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
      defaults: '2025-05-24'
    }}>
      <App />
    </PostHogProvider>
  </React.StrictMode>
);
