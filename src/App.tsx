import { FC } from 'react';
import './App.scss';
import Todos from './components/Todos/Todos';

const App: FC = () => {
  return (
    <div className="App">
      <Todos />
    </div>
  );
};

export default App;
