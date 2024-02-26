// import { Outlet } from 'react-router';
import { Provider } from 'react-redux';
import './App.css';
import MainRouter from './Components/Router/MainRouter';
import Store from './Components/Redux/Store';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <MainRouter/>
      </Provider>
    </div>
  );
}

export default App;
