import React from 'react';
import { View , Text} from 'react-native';
import Routes from './src/navigation/index.js';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {persistor, store} from './src/store';
import SplashScreen from 'react-native-splash-screen';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   // do stuff while splash screen is shown
  //     // After having done stuff (such as async tasks) hide the splash screen
  //     SplashScreen.hide();
  // }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
     
    );
  }
}

export default App;

