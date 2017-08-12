import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCZWnjxiaoydtYS2BPlfj3qpGwL2Mw85bU',
      authDomain: 'manager-da790.firebaseapp.com',
      databaseURL: 'https://manager-da790.firebaseio.com',
      projectId: 'manager-da790',
      storageBucket: 'manager-da790.appspot.com',
      messagingSenderId: '289611979426'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
