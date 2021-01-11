import React from 'react'
import './App.scss';
import Counter from './components/counter/Counter'
import {Provider} from 'react-redux';
import Article from './components/article/Article'
import ShoppingCart from './components/shopping/ShoppingCart'
import store from './components/redux/store'
import Todos from './components/todos/Todos'

const App = () => {
  return (
    <Provider store={store}>
      <Counter title="This is Redux Counter (Easy Mode)"/>
      <br />
      <Article title="This is Redux Article (Medium Mode)"/>
      <br />
      <Todos title="This is Redux Todos List (Hard Mode)"/>
      <br />
      <ShoppingCart title="This is Redux Shopping Cart (Expert Mode)"/>
      <br />
    </Provider>
  );
}

export default App;
