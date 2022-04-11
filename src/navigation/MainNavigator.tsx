import * as React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Main from '../screens/Main/Main';
import PLaceholder from '../screens/Placeholder/Placeholder';
import { RootStackParamList } from './navigationTypes';

const RootStackNavigator = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
    return (
        <RootStackNavigator.Navigator>
            <RootStackNavigator.Screen options={{headerTransparent: true, contentStyle: {backgroundColor: '#14CBC2'}}} name="Main" component={Main} />
            <RootStackNavigator.Screen options={{headerTransparent: true, contentStyle: {backgroundColor: '#14CBC2'}}} name="Placeholder" component={PLaceholder} />
        </RootStackNavigator.Navigator>
    );
};
  
export default MainNavigator;