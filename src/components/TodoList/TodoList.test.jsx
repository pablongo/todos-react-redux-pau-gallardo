import React from 'react';
import { screen, render, fireEvent } from '../../utils/testutils';

import actionTypes from '../../redux/actions/actionTypes';
import { deleteTodo, updateTodo, clearAll } from '../../redux/actions/actionCreators';
import TodoList from './TodoList';

jest.mock('../../redux/actions/actionCreators');

describe('Given a TodoList component', () => {
  describe('When it renders', () => {
    beforeEach(() => {
      const todos = [{
        text: 'Test',
        done: true,
      }];
      render(<TodoList todos={todos} />);
    });
    test('Then todos-container should be in the document', () => {
      expect(screen.getByTestId('todos-container')).toBeInTheDocument();
    });
    describe('And delete-button-0 is clicked', () => {
      test('Then deleteTodo should have been called', () => {
        const deleteButton = screen.getByTestId('deleteButton-0');

        deleteTodo.mockReturnValue({
          type: actionTypes.DELETE_TODO,
          index: 1,
        });
        updateTodo.mockReturnValue({
          type: actionTypes.UPDATE_TODO,
          index: 1,
        });
        clearAll.mockReturnValue({
          type: actionTypes.CLEAR_ALL,
        });
        fireEvent.click(deleteButton);

        expect(deleteTodo).toHaveBeenCalled();
      });
    });
    describe('And clear-button is clicked', () => {
      test('Then clearAll should have been called', () => {
        const deleteButton = screen.getByTestId('clear-all');

        deleteTodo.mockReturnValue({
          type: actionTypes.DELETE_TODO,
          index: 1,
        });
        updateTodo.mockReturnValue({
          type: actionTypes.UPDATE_TODO,
          index: 1,
        });
        clearAll.mockReturnValue({
          type: actionTypes.CLEAR_ALL,
        });

        fireEvent.click(deleteButton);

        expect(clearAll).toHaveBeenCalled();
      });
    });
  });
});
