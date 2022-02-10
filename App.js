import { SafeAreaView } from 'react-native';
import React from 'react';

import Navigation from './src/Navigation';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigation />
    </SafeAreaView>
  );
}
