import { FC } from 'react';
import { ITodosItemProps } from './types/types';
import './TodosItem.scss';

const TodoItem: FC<ITodosItemProps> = ({ todoText }) => {
  return (
    <div className="todos-item">
      <input type="checkbox" />
      <p>
        {/* {todoText} */}
        some text to do task Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Cupiditate, neque?
      </p>
    </div>
  );
};

export default TodoItem;
