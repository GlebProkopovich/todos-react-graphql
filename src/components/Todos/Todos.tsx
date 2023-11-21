import { FC, useState } from 'react';
import Button from '../Button/Button';
import TodoList from '../TodosList/TodosList';
import './Todos.scss';
import { ITodosListBtns } from './types/types';

const Todos: FC = () => {
  const [todosListBtns, setTodosListBtns] = useState<ITodosListBtns>({
    isAllTodosOpened: true,
    isCompletedTodosOpened: false,
  });

  const handleAllTodosListBtn = () => {
    setTodosListBtns({
      isAllTodosOpened: true,
      isCompletedTodosOpened: false,
    });
  };

  const handleCompletedTodosListBtn = () => {
    setTodosListBtns({
      isAllTodosOpened: false,
      isCompletedTodosOpened: true,
    });
  };

  console.log(todosListBtns);

  return (
    <div className="todos">
      <div className="todos-buttons">
        <Button
          spanTitle="format_list_bulleted"
          spanClass="todos-button_toggle_list"
          onClickFn={handleAllTodosListBtn}
        />
        <Button
          spanTitle="event_available" // prettier-ignore
          spanClass="todos-button_toggle_list" // prettier-ignore
          onClickFn={handleCompletedTodosListBtn}
        />
      </div>
      <TodoList />
    </div>
  );
};

export default Todos;
