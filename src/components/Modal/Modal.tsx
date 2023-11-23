import { FC } from 'react';
import Button from '../Button/Button';
import { IModalProps } from './types';
import { useDispatch } from 'react-redux';
import { toggleNewTaskModal } from '../../store/modal/modal.slice';
import './Modal.scss';

const Modal: FC<IModalProps> = ({
  spanTitleIcon,
  textContent,
  isInputTextAdded,
  btnClass,
  spanTitleBtn,
  spanClassBtn,
  onclickBtnFn,
}) => {
  const dispatch = useDispatch();

  const handleCloseBtn = (): void => {
    dispatch(toggleNewTaskModal(false));
  };

  return (
    <div className="modal">
      <div className="modal__container">
        <span className="modal__icon icon material-symbols-outlined">
          {spanTitleIcon}
        </span>
        <p className="modal__text">{textContent}</p>
        {isInputTextAdded && <input type="text" />}
        <Button
          btnClass="button__closure-modal"
          spanTitle="close"
          onClickFn={handleCloseBtn}
        />
        <Button
          btnClass={btnClass}
          spanTitle={spanTitleBtn}
          spanClass={spanClassBtn}
          onClickFn={onclickBtnFn}
        />
      </div>
    </div>
  );
};

export default Modal;
