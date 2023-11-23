import { FC } from 'react';
import { IButtonProps } from './types';
import './Button.scss';

const Button: FC<IButtonProps> = ({
  btnClass,
  spanTitle,
  spanClass,
  onClickFn,
}) => {
  return (
    <button className={`${btnClass} button`} onClick={onClickFn}>
      <span
        className={`${spanClass} button__icon icon material-symbols-outlined`}
      >
        {spanTitle}
      </span>
    </button>
  );
};

export default Button;
