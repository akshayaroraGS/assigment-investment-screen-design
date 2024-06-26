import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../theme/AppColors';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.PRIMARY} />
      <Text>Loading...</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
