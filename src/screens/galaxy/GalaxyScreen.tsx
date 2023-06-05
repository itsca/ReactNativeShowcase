import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  PixelRatio,
  Dimensions
} from 'react-native';
import { Avatar, Button, Headline, Text } from 'react-native-paper';
import { RootStackParamList, RootStackScreenProps } from '../../navigation/navigationTypes';
import Boxes from '../../components/Canvas3d';
import { Galaxy } from '../../components/galaxy/Galaxy';

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;
const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const GalaxyScreen = ({ route, navigation }: RootStackScreenProps<'GalaxyScreen'>) => {
  return (
    <SafeAreaView >
      <StatusBar />
      <View style={{minWidth: windowDimensions.width, minHeight: windowDimensions.height}}>
      <Galaxy />
      </View>
    </SafeAreaView>
  );
};

export default GalaxyScreen;
