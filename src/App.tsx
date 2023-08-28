import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@theme/theme.provider';
import { Paths } from '@constants/paths';
import { Layout } from '@layouts/layout';
import { Home } from '@pages/home';
import { ParallaxProvider } from 'react-scroll-parallax';
import { GraphqlProvider } from '@graphql/graphql.provider.tsx';
import { SnackbarProvider } from './contexts/snackbar.context.tsx';

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
