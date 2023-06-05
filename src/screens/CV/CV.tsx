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

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;
const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const CV = ({ route, navigation }: RootStackScreenProps<'CV'>) => {
  return (
    <SafeAreaView >
      <StatusBar />
      <Boxes />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View style={{padding: 20, minHeight: windowDimensions.height}}>
          <Headline style={{
            fontSize: getFontSize(42),
            paddingTop: 40,
            lineHeight: 45,
            color: 'white',
            fontWeight: 'bold',
            textShadowColor: '#5E37C3',
            textShadowOffset: {width: -1, height: 2},
            textShadowRadius: 1,
          }}>
            Javier Escalante
          </Headline>
          <Text
            variant='headlineMedium'
            style={{color: '#5E37C3',
            paddingTop: 0,
            fontSize: getFontSize(25),
            fontWeight: '100',
            marginBottom: 50,
          }}>
            Sr. Software Engineer
          </Text>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Costa Rica. 
          </Text>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            San José, Goicoechea, Guadalupe.
          </Text>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            +506 8878-2228
          </Text>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            itscae@gmail.com
          </Text>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            https://www.linkedin.com/in/jitsca/
          </Text>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            https://github.com/itsca
          </Text>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            https://stackoverflow.com/users/3583671/itsca
          </Text>
          <Text style={{color: 'white', marginBottom: 50, fontWeight: 'bold'}}>
            https://stackoverflow.com/users/3583671/itsca
          </Text>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
          As a Senior Software Engineer based in Costa Rica, I bring to the table a diverse skill set that includes expertise in web and mobile development. I have a proven track record of working on various high-traffic projects that generated significant revenue, including the Bergdorf Goodman mobile application.

This app had four thousand daily sessions and produced hundreds of thousands of dollars in monthly sales, further highlighting my ability to deliver results that meet business objectives. I am confident that my skills, experience, and passion for software development would make me a valuable addition to any team.

          </Text>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
          As a Senior Software Engineer based in Costa Rica, I bring to the table a diverse skill set that includes expertise in web and mobile development. I have a proven track record of working on various high-traffic projects that generated significant revenue, including the Bergdorf Goodman mobile application.

This app had four thousand daily sessions and produced hundreds of thousands of dollars in monthly sales, further highlighting my ability to deliver results that meet business objectives. I am confident that my skills, experience, and passion for software development would make me a valuable addition to any team.

          </Text>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
          As a Senior Software Engineer based in Costa Rica, I bring to the table a diverse skill set that includes expertise in web and mobile development. I have a proven track record of working on various high-traffic projects that generated significant revenue, including the Bergdorf Goodman mobile application.

This app had four thousand daily sessions and produced hundreds of thousands of dollars in monthly sales, further highlighting my ability to deliver results that meet business objectives. I am confident that my skills, experience, and passion for software development would make me a valuable addition to any team.

          </Text>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
          As a Senior Software Engineer based in Costa Rica, I bring to the table a diverse skill set that includes expertise in web and mobile development. I have a proven track record of working on various high-traffic projects that generated significant revenue, including the Bergdorf Goodman mobile application.

This app had four thousand daily sessions and produced hundreds of thousands of dollars in monthly sales, further highlighting my ability to deliver results that meet business objectives. I am confident that my skills, experience, and passion for software development would make me a valuable addition to any team.

          </Text>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
          As a Senior Software Engineer based in Costa Rica, I bring to the table a diverse skill set that includes expertise in web and mobile development. I have a proven track record of working on various high-traffic projects that generated significant revenue, including the Bergdorf Goodman mobile application.

This app had four thousand daily sessions and produced hundreds of thousands of dollars in monthly sales, further highlighting my ability to deliver results that meet business objectives. I am confident that my skills, experience, and passion for software development would make me a valuable addition to any team.

          </Text>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
          As a Senior Software Engineer based in Costa Rica, I bring to the table a diverse skill set that includes expertise in web and mobile development. I have a proven track record of working on various high-traffic projects that generated significant revenue, including the Bergdorf Goodman mobile application.

This app had four thousand daily sessions and produced hundreds of thousands of dollars in monthly sales, further highlighting my ability to deliver results that meet business objectives. I am confident that my skills, experience, and passion for software development would make me a valuable addition to any team.

          </Text>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
          As a Senior Software Engineer based in Costa Rica, I bring to the table a diverse skill set that includes expertise in web and mobile development. I have a proven track record of working on various high-traffic projects that generated significant revenue, including the Bergdorf Goodman mobile application.

This app had four thousand daily sessions and produced hundreds of thousands of dollars in monthly sales, further highlighting my ability to deliver results that meet business objectives. I am confident that my skills, experience, and passion for software development would make me a valuable addition to any team.

          </Text>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
          As a Senior Software Engineer based in Costa Rica, I bring to the table a diverse skill set that includes expertise in web and mobile development. I have a proven track record of working on various high-traffic projects that generated significant revenue, including the Bergdorf Goodman mobile application.

This app had four thousand daily sessions and produced hundreds of thousands of dollars in monthly sales, further highlighting my ability to deliver results that meet business objectives. I am confident that my skills, experience, and passion for software development would make me a valuable addition to any team.

          </Text>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
          As a Senior Software Engineer based in Costa Rica, I bring to the table a diverse skill set that includes expertise in web and mobile development. I have a proven track record of working on various high-traffic projects that generated significant revenue, including the Bergdorf Goodman mobile application.

This app had four thousand daily sessions and produced hundreds of thousands of dollars in monthly sales, further highlighting my ability to deliver results that meet business objectives. I am confident that my skills, experience, and passion for software development would make me a valuable addition to any team.

          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CV;
