import React from 'react';
import TodoForm from './TodoForm';
import renderer from 'react-test-renderer';


it('renders the form without crashing', () => {
  const tree = renderer.create(
    <TodoForm
      value="I'm a todo"
      onChange={jest.fn()}
      onSubmit={jest.fn()}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
})