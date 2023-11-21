import { FC } from 'react';
import { IButtonProps } from './types/types';
import './Button.scss';

const Button: FC<IButtonProps> = ({ spanTitle, spanClass, onClickFn }) => {
  return (
    <button className="todos-button" onClick={onClickFn}>
      <span className={`${spanClass} icon material-symbols-outlined`}>
        {spanTitle}
      </span>
    </button>
  );
};

export default Button;
