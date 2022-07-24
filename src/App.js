
import './App.css';
import CakeCon from './components/CakeCon';
import store from './redux/cakes/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeCon />
      </div>
    </Provider>
  );
}

export default App;
