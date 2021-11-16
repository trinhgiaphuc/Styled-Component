import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Header from './common/Header';

import LightTheme from 'theme/light';
import DarkTheme from 'theme/dark';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  body{
    background: ${p => p.theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${p => p.theme.bodyFontColor};
    font-family: 'Kaushan Script';
  }
`;

const App = () => {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme(currentTheme =>
            currentTheme.id === 'light' ? DarkTheme : LightTheme
          );
        },
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
