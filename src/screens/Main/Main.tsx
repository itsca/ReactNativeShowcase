import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Image
} from 'react-native';
import { Avatar, Button, Headline, Subheading, Text, Title } from 'react-native-paper';
import { RootStackParamList, RootStackScreenProps } from '../../navigation/navigationTypes';

const Main = ({ route, navigation }: RootStackScreenProps<'Main'>) => {
  return (
    <SafeAreaView >
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View style={{padding: 50}}>
          <Headline style={{
            fontSize: 133,
            paddingTop: 100,
            lineHeight: 95,
            marginBottom: 200,
            color: 'white',
            fontWeight: 'bold',
            // borderBottomWidth: 9,
            // borderBottomColor: 'white', 
            // textShadowColor: '#5E37C3',
            // textShadowOffset: {width: -5, height: 6},
            // textShadowRadius: 1,
          }}>
            Wel co me.
          </Headline>
          {/* <Avatar.Image 
          size={150} source={require('../../../assets/img/Main/profile.jpg')} /> */}
          <Image 
          style={{
            width: 200, 
            height: 300,
            position: 'absolute',
            zIndex: -100,
            top: 400,
            left: 150,
            opacity: 0.3,
            shadowColor: '#F97746',
            shadowOffset: {width: -5, height: 6},
            shadowRadius: 1,
            shadowOpacity: 1
          }}
          source={require('../../../assets/img/Main/profile.jpg')} />
          <Image 
          style={{
            width: 200, 
            height: 300,
            position: 'absolute',
            zIndex: -100,
            top: 400,
            left: 150,
            opacity: 0.01,
            tintColor: '#5E37C3'
          }}
          source={require('../../../assets/img/Main/profile.jpg')} />
          <Subheading style={{color: '#076DF2',
           paddingTop: 50,
           fontSize: 30,
           fontWeight: '100'
            // borderTopWidth: 4,
            // borderTopColor: 'white'
          }}>
            Javier Escalante __
          </Subheading>
          <Text style={{color: 'white', marginBottom: 100, fontWeight: 'bold'}}>
            React Native Showcase.
          </Text>
          <Button mode="contained" onPress={() => navigation.navigate('Placeholder')}>
            Navigate to next screen.
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
