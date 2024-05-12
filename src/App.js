import React from 'react';
import { Provider } from 'react-redux';
import Player from './components/player';
import store from './redux/store';
import './App.css'; // Import Tailwind CSS styles

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Player />
      </div>
    </Provider>
  );
}

export default App;
