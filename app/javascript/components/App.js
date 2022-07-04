import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './greeting.js';
import store from '../redux/configureStore.js';

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Greeting /> } />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
