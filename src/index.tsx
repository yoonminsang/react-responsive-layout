import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { ThemeProvider } from 'styled-components';
import App from './app';
import { rootReducer } from './store';
import GlobalStyle from './styles/global-style';
import theme from './styles/theme';

const middleware = process.env.NODE_ENV === 'development' ? [logger] : [];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

ReactDom.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
  window.document.getElementById('root'),
);
