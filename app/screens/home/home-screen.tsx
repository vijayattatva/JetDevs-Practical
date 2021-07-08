import React, { useState } from 'react';
import { Alert, Button, SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';

const HomeScreen = () => {

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>{"Home Screen"}</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;