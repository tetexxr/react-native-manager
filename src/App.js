import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
