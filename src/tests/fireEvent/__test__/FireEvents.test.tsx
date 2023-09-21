import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for the "toBeVisible" matcher
import FireEvents from '../FireEvents';
import * as fetchDataModule from '../fetchData';

jest.mock('../fetchData', () => {
  return {
    fetchData: jest.fn(),
  };
});

test('shows paragraph after button click', async () => {
  (fetchDataModule.fetchData as jest.Mock).mockResolvedValue('Mocked Data');

  render(<FireEvents/>);
  expect(screen.getByTestId('button')).toBeInTheDocument();

  fireEvent.click(screen.getByTestId('button'));
  await waitFor(() => expect(screen.getByTestId('paragraph')).toHaveTextContent('Mocked Data'));
});