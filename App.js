import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';


export default function App() {
  const [range, setRange] = useState('50%')
  const [sliding, setSliding] = useState('Inactive')

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{range}</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{sliding}</Text>

      <Slider
        style={{ width: 250, height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="tomato"
        maximumTrackTintColor="#000000"
        thumbTintColor='tomato'
        value={.5}
        onValueChange={value => setRange(parseInt(value * 100) + '%')}
        onSlidingStart={() => setSliding('Sliding')}
        onSlidingComplete={() => setSliding('Inactive')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
