import { FC, useState } from 'react';
import Button from '../Button/Button';
import { ITodosListBtns } from './types';
import TodosItem from '../TodosItem/TodosItem';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNewTaskModal } from '../../store/modal/modal.slice';
import './Todos.scss';
import { getModalState } from '../../store';

const Todos: FC = () => {
  const dispatch = useDispatch();

  const [todosListBtns, setTodosListBtns] = useState<ITodosListBtns>({
    isAllTodosOpened: true,
    isCompletedTodosOpened: false,
  });

  const handleAllTodosBtn = (): void => {
    setTodosListBtns({
      isAllTodosOpened: true,
      isCompletedTodosOpened: false,
    });
  };

  const handleCompletedTodosBtn = (): void => {
    setTodosListBtns({
      isAllTodosOpened: false,
      isCompletedTodosOpened: true,
    });
  };

  const handleAddBtn = (): void => {
    dispatch(toggleNewTaskModal(true));
  };

  const isAllTodosOpened = todosListBtns.isAllTodosOpened;
  const isCompletedTodosOpened = todosListBtns.isCompletedTodosOpened;

  return (
    <div className="todos">
      <div className="todos__buttons">
        <Button
          btnClass={`button__toggle-list ${
            isAllTodosOpened
              ? 'button__toggle-list_active'
              : 'button__toggle-list_inactive'
          }`}
          spanTitle="format_list_bulleted"
          spanClass="button__icon-toggle"
          onClickFn={handleAllTodosBtn}
        />
        <Button
          btnClass={`button__toggle-list ${
            isCompletedTodosOpened
              ? 'button__toggle-list_active'
              : 'button__toggle-list_inactive'
          }`}
          spanTitle="event_available"
          spanClass="button__icon-toggle"
          onClickFn={handleCompletedTodosBtn}
        />
      </div>
      <div className="todos__list">
        <TodosItem todoText="buy a laptop" />
        <TodosItem todoText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quae incidunt tempora sit officia alias voluptate! Eaque esse sed dolores." />
        <TodosItem todoText="lorem ipsum hello warlds of warcrafts and other games" />
        <TodosItem todoText="lorem ipsum hello warlds of warcrafts and other games" />
        <TodosItem todoText="lorem ipsum hello warlds of warcrafts and other games" />
        <TodosItem todoText="lorem ipsum hello warlds of warcrafts and other games" />
        <TodosItem todoText="lorem ipsum hello warlds of warcrafts and other games" />
        <TodosItem todoText="lorem ipsum hello warlds of warcrafts and other games" />
        <TodosItem todoText="lorem ipsum hello warlds of warcrafts and other games" />
        <TodosItem todoText="lorem ipsum hello warlds of warcrafts and other games" />
        <TodosItem todoText="lorem ipsum hello warlds of warcrafts and other games" />
        <TodosItem todoText="lorem ipsum hello warlds of warcrafts and other games" />
        <TodosItem todoText="lorem ipsum hello warlds of warcrafts and other games" />
        <TodosItem todoText="lorem ipsum hello warlds of warcrafts and other games" />
        <TodosItem todoText="lorem ipsum hello warlds of warcrafts and other games" />
        <TodosItem todoText="lorem ipsum hello warlds of warcrafts and other games" />
        <TodosItem todoText="lorem ipsum hello warlds of warcrafts and other games" />
        <TodosItem todoText="lorem ipsum hello warlds of warcrafts and other games" />
        <TodosItem todoText="lorem ipsum hello warlds of warcrafts and other games" />
        <TodosItem todoText="lorem ipsum hello warlds of warcrafts and other games" />
        <TodosItem todoText="lorem ipsum hello warlds of warcrafts and other games" />
        <TodosItem todoText="lorem ipsum hello warlds of warcrafts and other games" />
      </div>
      <p className="todos__total-count">Total count: 25</p>
      <Button
        btnClass="button__add"
        spanTitle="add"
        spanClass="button__icon-add"
        onClickFn={handleAddBtn}
      />
    </div>
  );
};

export default Todos;
