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
import { Demo } from '../../components/DemoSkia';

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;
const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const Main = ({ route, navigation }: RootStackScreenProps<'Main'>) => {
  return (
    <SafeAreaView >
      <StatusBar />
      {/* <Boxes /> */}
      <Demo />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View style={{padding: 50, minHeight: windowDimensions.height}}>
          <Headline style={{
            fontSize: 133,
            paddingTop: 40,
            lineHeight: 95,
            marginBottom: 20,
            color: 'white',
            fontWeight: 'bold',
            textShadowColor: '#5E37C3',
            textShadowOffset: {width: -5, height: 6},
            textShadowRadius: 1,
          }}>
            Wel co me.
          </Headline>
          <Avatar.Image
             size={100}
            //  style={{
            //   position: 'absolute',
            //   zIndex: -100,
            //   top: screenDimensions.height * 0.55,
            //   right: screenDimensions.width * 0.4,
            //   opacity: 0.6
            // }}
            source={require('../../../assets/img/Main/profile.jpg')} 
          />
          <Text
            variant='headlineMedium'
            style={{color: '#5E37C3',
            paddingTop: 0,
            fontSize: getFontSize(25),
            fontWeight: '100',
          }}>
            Javier Escalante __
          </Text>
          <Text style={{color: 'white', marginBottom: 100, fontWeight: 'bold'}}>
            React Native Showcase.
          </Text>
          <Button mode="contained" onPress={() => navigation.navigate('CV')}
          style={{opacity: 0.9}}>
            Check my CV
          </Button>
          <Button mode="contained" onPress={() => navigation.navigate('GalaxyScreen')}
          style={{opacity: 0.9}}>
            Go to Galaxy
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
