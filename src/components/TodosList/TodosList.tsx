import { FC } from 'react';
import TodosItem from '../TodosItem/TodosItem';
import './TodosList.scss';

const TodoList: FC = () => {
  return (
    <div className="todos-list">
      <TodosItem todoText="" />
    </div>
  );
};

export default TodoList;
