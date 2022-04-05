import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/Main/Main';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
    );
};
  
export default MainNavigator;