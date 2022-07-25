
import './App.css';
import store from './redux/Store';
import { Provider } from 'react-redux';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceContainer from './components/HooksIceContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <HooksIceContainer />
      </div>
    </Provider>
  );
}

export default App;
