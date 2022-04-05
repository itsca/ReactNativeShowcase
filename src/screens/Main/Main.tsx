import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import { Button } from 'react-native-paper';

const Main = () => {
  return (
    <SafeAreaView >
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            Press me
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
