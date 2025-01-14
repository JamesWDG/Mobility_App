/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {authRoutes} from './AuthRoutes';

const AuthenticationStack = createNativeStackNavigator();

const AuthStack = () => {
  const routes = authRoutes;
  return (
    <AuthenticationStack.Navigator initialRouteName={routes[0]?.component}>
      {routes.map(data => {
        return (
          <AuthenticationStack.Screen
            options={{headerShown: false}}
            name={data?.name}
            component={data?.component}
          />
        );
      })}
    </AuthenticationStack.Navigator>
  );
};

export default AuthStack;
