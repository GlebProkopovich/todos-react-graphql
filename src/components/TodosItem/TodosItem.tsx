import { FC, useState } from 'react';
import { ITodosItemProps } from './types';
import Button from '../Button/Button';
import { animated, useSpring } from 'react-spring';
import './TodosItem.scss';

const TodosItem: FC<ITodosItemProps> = ({ todoText }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const checkboxAnimationStyle = useSpring({
    backgroundColor: isChecked ? '#fad4b4' : '#fff',
    borderColor: isChecked ? '#fad4b4' : '#ddd',
  });

  return (
    <div className="todos-item">
      <label className="todos-item__label">
        <input
          className="todos-item__input"
          type="checkbox"
          onChange={() => setIsChecked(!isChecked)}
        />
        <animated.svg
          style={checkboxAnimationStyle}
          className={`todos-item__checkbox ${
            isChecked ? 'todos-item__checkbox_active' : ''
          }`}
          aria-hidden="true"
          viewBox="0 0 15 11"
          fill="none"
        >
          <animated.path
            d="M1 4.5L5 9L14 1"
            strokeWidth="2"
            stroke={isChecked ? '#fff' : 'none'}
          />
        </animated.svg>
      </label>
      <p className="todos-item__text">{todoText}</p>
      <Button
        btnClass="button__closure"
        spanTitle="close"
        spanClass="button__closure-icon"
        onClickFn={() => 'hello'}
      />
    </div>
  );
};

export default TodosItem;
