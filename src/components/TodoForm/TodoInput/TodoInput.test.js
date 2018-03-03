import React from 'react';
import TodoInput from './TodoInput';
import renderer from 'react-test-renderer';


it('renders the input field without crashing', () => {
  const tree = renderer.create(
    <TodoInput value="I'm a todo" onChange={jest.fn()}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
