
import './App.css';
import CakeCon from './components/CakeCon';
import store from './redux/Store';
import { Provider } from 'react-redux';
import HooksCakeContainer from './components/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeCon />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
