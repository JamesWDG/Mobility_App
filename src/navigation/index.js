import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './NavigationService';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import analytics from '@react-native-firebase/analytics';
import TabStack from './tab/TabStack';
import AuthStack from './auth/AuthStack';
import AppStack from './app/AppStack';
import DrawerStack from './drawer/DrawerStack';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="AuthStack">
      <RootStack.Screen
        options={{headerShown: false}}
        name="AuthStack"
        component={AuthStack}
      />
      <RootStack.Screen
        options={{headerShown: false}}
        name="TabStack"
        component={TabStack}
      />
       <RootStack.Screen
        options={{headerShown: false}}
        name="DrawerStack"
        component={DrawerStack}
      />
      <RootStack.Screen
        options={{headerShown: false}}
        name="AppStack"
        component={AppStack}
      />
     
    </RootStack.Navigator>
  );
};

const Routes = () => {
  const routeNameRef = useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;
        if (previousRouteName !== currentRouteName) {
          // await analytics().logEvent(currentRouteName);
        }
        routeNameRef.current = currentRouteName;
      }}
      >
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Routes;
