import React from 'react'
import './App.scss';
import Counter from './components/counter/Counter'
import {Provider} from 'react-redux';
import Article from './components/article/Article'
import store from './components/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Counter title="This is Redux Counter (Easy Mode)"/>
      <br />
      <Article title="This is Redux Article (Medium Mode)"/>
    </Provider>
  );
}

export default App;
