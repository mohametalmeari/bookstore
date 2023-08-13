import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

test('renders learn react link', () => {
  render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  );
  const linkElement = screen.getByText(/Bookstore CMS/i);
  expect(linkElement).toBeInTheDocument();
});
