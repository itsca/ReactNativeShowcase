import * as React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Main from '../screens/Main/Main';
import PLaceholder from '../screens/Placeholder/Placeholder';
import CV from '../screens/CV/CV';
import { RootStackParamList } from './navigationTypes';
import GalaxyScreen from '../screens/galaxy/GalaxyScreen';

const RootStackNavigator = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
    return (
        <RootStackNavigator.Navigator>
            <RootStackNavigator.Screen options={{headerShown: false, headerTransparent: true, contentStyle: {backgroundColor: '#040712'}}} name="Main" component={Main} />
            <RootStackNavigator.Screen options={{headerTransparent: true, contentStyle: {backgroundColor: '#040712'}, headerTintColor: '#fff'}} name="CV" component={CV} />
            <RootStackNavigator.Screen options={{headerTransparent: true, headerTintColor: '#fff'}} name="GalaxyScreen" component={GalaxyScreen} />
        </RootStackNavigator.Navigator>
    );
};
  
export default MainNavigator;