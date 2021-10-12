import React from 'react';
import { screen, render, fireEvent } from '../../utils/testutils';

import actionTypes from '../../redux/actions/actionTypes';
import { createNewTodo } from '../../redux/actions/actionCreators';
import Search from './Search';

jest.mock('../../redux/actions/actionCreators');

describe('Given Search component', () => {
  describe('When it renders', () => {
    beforeEach(() => {
      render(<Search />);
    });
    test('Then search-input should be in the document', () => {
      expect(screen.getByTestId('search-input')).toBeInTheDocument();
    });
    describe('And enter key is pressed', () => {
      test('Then dispatch should have been called', () => {
        const searchInput = screen.getByTestId('search-input');

        createNewTodo.mockReturnValue({
          type: actionTypes.ADD_TODO,
          todo: {
            text: 'Test this part',
            done: 'false',
          },
        });

        fireEvent.keyPress(searchInput, { key: 'Enter', code: 'Enter', charCode: 13 });

        expect(createNewTodo).toHaveBeenCalled();
      });
    });
  });
});
