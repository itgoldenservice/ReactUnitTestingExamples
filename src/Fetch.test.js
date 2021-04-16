// __tests__/fetch.test.js

//Step1 Import
import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Fetch from './Fetch'
import axios from 'axios';

 //Step2 Mock
jest.mock('axios');

test('loads and displays greeting', async () => {
  //Step2 Mock
  const resp = { data: { greeting: 'hello there' } };
  axios.get.mockResolvedValue(resp);
  
  //Step3 Arrange - Render method
  //The render method renders a React element into the DOM.
  render(<Fetch url="/posts" />)

  //Step4 Act - FireEvent
  //The fireEvent method allows you to fire events to simulate user actions.
  fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor(() => screen.getByRole('heading'))

  //Step5 Assert
  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toHaveAttribute('disabled')
})

test('handles server error', async () => {
  axios.get.mockRejectedValue({status: 500});

  render(<Fetch url="/greeting" />)

  fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor(() => screen.getByRole('alert'))

  expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
  expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
})