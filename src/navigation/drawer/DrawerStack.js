/* eslint-disable react/react-in-jsx-scope */
import {createDrawerNavigator} from '@react-navigation/drawer';
import Drawer from '../../components/drawer/Drawer';
import AppStack from '../app/AppStack';

const DrawersStack = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <DrawersStack.Navigator
      drawerContent={props => <Drawer {...props} />}
      visible>
      <DrawersStack.Screen options={{headerShown: false}} name="DrawerStack">
        {props => <TabStack {...props} />}
      </DrawersStack.Screen>
    </DrawersStack.Navigator>
  );
};

export default DrawerStack;
