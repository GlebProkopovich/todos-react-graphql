import { FC } from 'react';
import { ITodosItemProps } from './types';
import Button from '../Button/Button';
import './TodosItem.scss';

const TodosItem: FC<ITodosItemProps> = ({ todoText }) => {
  return (
    <div className="todos-item">
      <input type="checkbox" />
      <p className="todos-item__text">{todoText}</p>
      <Button
        spanTitle="close"
        spanClass="button__closure"
        onClickFn={() => 'hello'}
      />
    </div>
  );
};

export default TodosItem;
