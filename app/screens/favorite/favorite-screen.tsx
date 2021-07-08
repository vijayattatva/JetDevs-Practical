import React, { useState } from 'react';
import { Alert, Button, SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';

const FavoriteScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>{"Favorite Screen"}</Text>
      </View>
    </SafeAreaView>
  );
};

export default FavoriteScreen;