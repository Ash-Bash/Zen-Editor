import { createStore } from 'redux';
import reducer from './reducer';

// add middleware

export default function configureStore(initialState = { dir: ''}) {
  return createStore(reducer, initialState);
}
