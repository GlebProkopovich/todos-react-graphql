import { FC } from 'react';
import './App.scss';
import Todos from './components/Todos/Todos';
import Modal from './components/Modal/Modal';

const App: FC = () => {
  return (
    <div className="App">
      <Todos />
      <Modal />
    </div>
  );
};

export default App;
