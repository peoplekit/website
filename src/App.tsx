import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@theme/theme.provider';
import { Paths } from '@constants/paths';
import { Layout } from '@layouts/layout';
import { Home } from '@pages/home';
import { ParallaxProvider } from 'react-scroll-parallax';
import { GraphqlProvider } from '@graphql/graphql.provider.tsx';
import { SnackbarProvider } from './contexts/snackbar.context.tsx';
import { PrivacyPage } from '@pages/legal/privacy.tsx';
import { CookiesPage } from '@pages/legal/cookies.tsx';
import { TermsPage } from '@pages/legal/terms.tsx';
import { AcceptableUsePage } from '@pages/legal/acceptable-use.tsx';
import { DisclaimerPage } from '@pages/legal/disclaimer.tsx';

function App() {
  return (
    <SnackbarProvider>
      <GraphqlProvider>
        <ThemeProvider>
          <ParallaxProvider>
            <Router>
              <Routes>
                <Route element={<Layout />}>
                  <Route path={Paths.HOME} element={<Home />} />
                  <Route path={Paths.PRIVACY_POLICY} element={<PrivacyPage />} />
                  <Route path={Paths.COOKIE_POLICY} element={<CookiesPage />} />
                  <Route path={Paths.TERMS} element={<TermsPage />} />
                  <Route path={Paths.ACCEPTABLE_USE_POLICY} element={<AcceptableUsePage />} />
                  <Route path={Paths.DISCLAIMER} element={<DisclaimerPage />} />
                </Route>
              </Routes>
            </Router>
          </ParallaxProvider>
        </ThemeProvider>
      </GraphqlProvider>
    </SnackbarProvider>
  );
}

export default App;
