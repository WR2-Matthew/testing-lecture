import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../Components/Header';

//React-testing-library

//npm run test in terminal

//container, getTestById, and queryByTestId all come from render.

it('Does not show dropdown when mounted', () => {

  const { queryByTestId } = render(<Header />);

  const dropdown = queryByTestId('dropdown')

  expect(dropdown).toBeFalsy();  //passes
  expect(dropdown).toBeTruthy(); //fails

});

it('Shows dropdown when hamburger is clicked', () => {

  //Render() is where you pass in what component we are testing code in.
  // With getByTestId if the Id doesn't exist an error will be thrown
  const { getByTestId, container } = render(<Header />);

  const hamburger = getByTestId('hamburger-button');

  fireEvent.click(hamburger);

  expect(container.textContent).toContain('Dropdown menu');
});