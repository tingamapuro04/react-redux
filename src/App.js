
import './App.css';
import store from './redux/Store';
import { Provider } from 'react-redux';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceContainer from './components/HooksIceContainer';
import HooksWaterContainer from './components/HooksWaterContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <HooksIceContainer />
        <HooksWaterContainer />
      </div>
    </Provider>
  );
}

export default App;
