/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { render, screen, fireEvent } from '@testing-library/react-native'

// it('renders correctly', () => {
  
//   const tree = render(<App login={undefined}/>);
//   expect(tree.toJSON()).toMatchSnapshot();

// });

describe('Login', () => {

  describe('change text login', () => {
    it('change text username and password', () => {
      const { getByTestId } = render(<App login={undefined} />);

      // use fireEvent change value TextInput
      fireEvent.changeText(getByTestId('username'), 'admin');
      fireEvent.changeText(getByTestId('password'), 'admin@123');

      // use toEqual check value TextInput
      expect(getByTestId('username').props.value).toEqual('admin');
      expect(getByTestId('password').props.value).toEqual('admin@123');
    });

  });
  describe('Submit form login', () => {

    it('on submit login', () => {
      const data = { "password": "123456", "username": "admin@123" }
      const submitHandler = jest.fn();
      const { getByTestId } = render(
        // passing prop to Login component
        <App login={submitHandler} />

      );
      fireEvent.changeText(getByTestId('username'), 'admin@123');
      fireEvent.changeText(getByTestId('password'), '123456');

      expect(getByTestId('username').props.value).toEqual('admin@123');
      expect(getByTestId('password').props.value).toEqual('123456');

      // use fireEvent.press call Button submit
      fireEvent.press(getByTestId('btnSubmit'));

      // checking ouput data equal input
      expect(submitHandler).toHaveBeenCalledWith(data);
    });

  })

});