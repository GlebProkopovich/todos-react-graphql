import { FC, useEffect } from 'react';
import Todos from '../components/Todos/Todos';
import Modal from '../components/Modal/Modal';
import './App.scss';
import { useSelector } from 'react-redux';
import { getModalState } from '../store';

const App: FC = () => {
  const { isNewTaskModalOpened } = useSelector(getModalState);

  useEffect(() => {
    if (isNewTaskModalOpened) {
      document.body.classList.add('modal_opened');
    } else {
      document.body.classList.remove('modal_opened');
    }
  }, [isNewTaskModalOpened]);

  return (
    <div className="App">
      <Todos />
      {isNewTaskModalOpened && (
        <Modal
          spanTitleIcon="add_task"
          textContent="Write your task"
          isInputTextAdded={true}
          btnClass="button__add button__add-modal"
          spanTitleBtn="add"
          spanClassBtn="button__icon-add"
          onclickBtnFn={() => {}}
        />
      )}
    </div>
  );
};

export { App };
