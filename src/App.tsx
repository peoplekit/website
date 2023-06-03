import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@theme/theme.provider';
import { Paths } from '@constants/paths';
import { Layout } from '@layouts/layout';
import { Home } from '@pages/home';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path={Paths.HOME} element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
